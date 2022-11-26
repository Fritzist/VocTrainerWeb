import { writable, type Writable } from "svelte/store";

export const username: Writable<string | undefined> = writable(undefined);
export const password: Writable<string | undefined> = writable(undefined);