import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fastifyCors from "@fastify/cors";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPlugin } from "apollo-server-plugin-base";
import { execute, GraphQLSchema, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { buildSchema } from "type-graphql";
import UserResolver from "../modules/user/user.resolver";
import fastifyCookie from "@fastify/cookie";
import fastifyJwt from "@fastify/jwt";

const app = fastify();

const allowedOrigins = ["http://localhost:3000", "https://studio.apollographql.com"];

app.register(fastifyCors, {
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      return callback(new Error("Origin not allowed"), false);
    }
  },
});

app.register(fastifyCookie, {
  parseOptions: {},
});

app.register(fastifyJwt, {
  secret: "change-later",
  cookie: {
    cookieName: "token",
    signed: false,
  },
});

function fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

type BuildContextParams = {
  request?: FastifyRequest;
  reply?: FastifyReply;
  connectionParams?: {
    Authorization: string;
  };
};

async function buildContext({ request, reply, connectionParams }: BuildContextParams) {
  //for websocket connections
  if (connectionParams || !request) {
    try {
      return { user: await app.jwt.verify(connectionParams?.Authorization ?? "") };
    } catch (err) {
      return { user: null };
    }
  }
  //for regular connections
  try {
    const user = await request?.jwtVerify();
    return { request, reply, user };
  } catch (err) {
    return { request, reply, user: null };
  }
}

export type Context = Awaited<ReturnType<typeof buildContext>>;

export async function createServer() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({
    schema,
    plugins: [fastifyAppClosePlugin(app), ApolloServerPluginDrainHttpServer({ httpServer: app.server })],
    context: buildContext,
  });

  return { app, server };
}

type SubscriptionServerParams = {
  schema: GraphQLSchema;
  server: ApolloServer;
};

const subscriptionServer = ({ schema, server }: SubscriptionServerParams) => {
  return SubscriptionServer.create(
    {
      schema,
      execute: execute,
      subscribe: subscribe,
      async onConnect(connectionParams: Object) {
        return buildContext({ connectionParams });
      },
    },
    {
      server,
      path: "/graphql",
    }
  );
};
