import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export function loadScript(url: string) {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = url;

		// Triggered when the resource is fully loaded and ready
		script.onload = () => resolve(script);

		// Triggered if the resource fails to load
		script.onerror = () => reject(new Error(`Script load error for ${url}`));

		document.head.appendChild(script);
	});
}