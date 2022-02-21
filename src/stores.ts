import type { User } from '$lib/db/user';
import { writable } from 'svelte/store';

export const loginUser = writable<User | null>(null);
