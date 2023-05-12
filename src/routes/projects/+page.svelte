<script lang="ts">
	import { onDestroy } from "svelte";
	import { showContactStore } from "../../function/store.js";
	import ContactCard from "../../components/ContactCard.svelte";
	import SectionIntro from "../../components/SectionIntro.svelte";

    let showContact = false;
    const showContactStoreUnsubscribe = showContactStore.subscribe((value) => showContact = value);
    export let data;

    onDestroy(() => {
        showContactStoreUnsubscribe();
    });
</script>
{#if showContact}
    <ContactCard on:close={() => showContactStore.set(false)} bind:data={data}/>
{/if}

<section>
    <h1>Projects</h1>
</section>
<section id="about">
    <h1>Project Section</h1>
</section>
<SectionIntro />
<SectionIntro />
<!-- <section>
    <img src={image} alt="Cool logo" />
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <a href="/projects">Projects</a>
</section> -->

<style>
    section {
        min-height: 100%;
        min-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: red; */
    }

    h1 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        font-size: clamp(1.5rem, -1.5rem + 8vw, 4rem);
    }
</style>