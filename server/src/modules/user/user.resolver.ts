import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "../../utils/createServer";
import { RegisterUserInput, User } from "./user.dto";
import { createUser } from "./user.service";

@Resolver(() => User)
class UserResolver {
  @Mutation(() => User)
  async register(@Arg("input") input: RegisterUserInput) {
    try {
      const user = await createUser(input);
      return user;
    } catch (err) {
      //TODO check if it's because user already exists
      throw err;
    }
  }

  @Query(() => User)
  me(@Ctx() context: Context) {
    return context.user;
  }
}

export default UserResolver;
