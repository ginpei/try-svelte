export interface User {
  email: string;
  id: string;
  password: string;
}

export function createUser(init: Partial<User> = {}): User {
  return {
    email: init.email ?? "",
    id: init.id ?? "",
    password: init.password ?? "",
  }
}
