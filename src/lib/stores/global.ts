import type { Axes } from "$lib/utils/Axes";
import { Elypse } from "$lib/utils/Elypse";
import { writable } from "svelte/store";

export const screenDimensions = writable<Axes>({
    x : 0,
    y : 0
});

export const elypses = writable<{ [key: string]: Elypse }>({});