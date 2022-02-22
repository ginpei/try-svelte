import type { User } from '$lib/data/User';
import { writable } from 'svelte/store';

export const loginUser = writable<User | null>(null);
