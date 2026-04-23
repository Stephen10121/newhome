<script lang="ts">
	import { Toaster } from "$lib/components/ui/sonner/index.js";
	import ContactModal from "$lib/ContactModal.svelte";
	import { turnstileWidgetId } from "$lib/store.js";
	import favicon from '$lib/assets/logo.png';
	import Footer from '$lib/Footer.svelte';
	import { loadScript } from "$lib/utils";
	import Stars from '$lib/Stars.svelte';
	import Blobs from '$lib/Blobs.svelte';
	import { onMount } from "svelte";
	import './layout.css';

	let { children, data } = $props();

	let token = $state("");

	onMount(() => {
		try {
			loadScript("https://challenges.cloudflare.com/turnstile/v0/api.js").then(() => {
				//@ts-ignore
				turnstileWidgetId.set(turnstile.render('#turnstile-container', {
					sitekey: data.turnstileSiteKey,
					callback: function(token2: string) {
						token = token2;
					},
				}));
			});
		} catch (err) {
			console.log(err);
		}

		return () => {
			const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');

			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster theme="dark" />

<Stars />

<ContactModal turnstileSiteToken={token} />
<Blobs />

<div id="turnstile-container"></div>
{@render children()}

<Footer />