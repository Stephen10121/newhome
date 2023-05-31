import type { PrismaClient } from "@prisma/client";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: import("pocketbase").default;
			user: import("pocketbase").default['authStore']['model'];
		}
		// interface PageData {}
		// interface Platform {}
	}
	var prisma: PrismaClient
}

export {};
