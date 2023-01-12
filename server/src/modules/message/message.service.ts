import prisma from "../../../prisma/prisma";
import { CreateMessageInput } from "./message.dto";

export function createMessage({ userId, ...input }: CreateMessageInput) {
  return prisma.message.create({
    data: {
      ...input,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function findMessages(filters?: {}) {
  //TODO support filters
  return prisma.message.findMany();
  // {
  //     where: {
  //         ...filters
  //     }
  // }
}
