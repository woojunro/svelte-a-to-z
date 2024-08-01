import { derived, writable } from 'svelte/store';
import { now } from './now';

export const baseTime = writable(new Date());

export const elapsed = derived([baseTime, now], ([$baseTime, $now]) => {
	return Math.round(($now.getTime() - $baseTime.getTime()) / 1000);
});
