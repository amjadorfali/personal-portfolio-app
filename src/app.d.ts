// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			userid: string;
		}

		interface PageData {
			url?: string;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Used to provide TS declarations for non-TS modules
	declare module '*&imagetools' {
		/**
		 * actual types
		 * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
		 * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
		 */
		const out;
		export default out;
	}
}

export {};
