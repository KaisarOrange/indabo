import { writable } from 'svelte/store';

export const viewportWidth = writable(typeof window !== 'undefined' ? window.innerWidth : 0);

function updateViewportWidth() {
	if (typeof window !== 'undefined') {
		viewportWidth.set(window.innerWidth);
	}
}

if (typeof window !== 'undefined') {
	window.addEventListener('resize', updateViewportWidth);
}
