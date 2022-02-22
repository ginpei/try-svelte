import { createUser, User } from "./User";

const users: User[] = [
  createUser({
    email: "test@example.com",
    id: "user-1",
    password: "123456",
  }),
];

export async function findLoginUser(
  email: string,
  password: string
): Promise<User | null> {
  const user = users.find((v) => v.email === email);
  if (!user || user.password !== password) {
    return null;
  }

  return user;
}

export async function getUserById(id: string): Promise<User | null> {
  return users.find((v) => v.id === id) ?? null;
}
