export interface User {
  email: string;
  id: string;
  password: string;
}

const users: User[] = [
  {
    email: "test@example.com",
    id: "user-1",
    password: "123456",
  },
];

export async function findLoginUser(email: string, password: string): Promise<User | null> {
  const user = users.find((v) => v.email === email);
  if (user?.password !== password) {
    return null;
  }

  return user;
}
