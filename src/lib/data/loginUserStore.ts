import type { User } from './User';
import { writable } from 'svelte/store';

export const loginUser = writable<User | null>(null);
