import type { User } from './User';
import { writable } from 'svelte/store';
import { getUserById } from './userDb';

export const loginUser = writable<User | null>(null);

export function setLoginUser(user: User | null) {
  if (user) {
    window.sessionStorage.setItem("userId", user.id);
  } else {
    window.sessionStorage.removeItem("userId");
  }
  loginUser.set(user);
};

export async function initLoginUser(callback: (loginUser: User | null) => void) {
  if (typeof window === "undefined") {
    return;
  }

  const userId = window.sessionStorage.getItem("userId");
  if (!userId) {
    loginUser.set(null);
    callback(null);
    return;
  }

  const user = await getUserById(userId);
  if (!user) {
    loginUser.set(null);
    callback(null);
    return;
  }

  loginUser.set(user);
  callback(user);
}
