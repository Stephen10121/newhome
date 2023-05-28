import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase(import.meta.env._POCKETBASE_URL);

export const currentUser = writable(pb.authStore.model)