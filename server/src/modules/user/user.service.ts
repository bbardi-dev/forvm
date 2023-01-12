import argon2 from "argon2";
import prisma from "../../../prisma/prisma";
import { RegisterUserInput } from "./user.dto";

export async function createUser(input: RegisterUserInput) {
  // hash the password
  const password = await argon2.hash(input.password);

  // insert user to DB
  return prisma.user.create({
    data: {
      ...input,
      email: input.email.toLocaleUpperCase(),
      username: input.username.toLowerCase(),
      password,
    },
  });
}
