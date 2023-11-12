import { writable } from "svelte/store";

export const showContactStore = writable(false);
export const scrollPositionStore = writable(0);
export const rotateEarthDegrees = writable(0);