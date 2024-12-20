import { writable } from 'svelte/store';

export const isActive = writable(true);
export const INACTIVITY_TIMEOUT = 5000; // 5 seconds
