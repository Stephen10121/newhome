<script lang="ts">
	import { onDestroy } from "svelte";
    import ContactCard from "../components/ContactCard.svelte";
	import { showContactStore } from "../function/store";
	import Language from "../components/Language.svelte";

    import cssIcon from "../assets/css.png";
    import tsicon from "../assets/typescript.png";
    import jsicon from "../assets/javascript.webp";
    import goicon from "../assets/golang.png";
    import htmlicon from "../assets/html.png";
    import pythonicon from "../assets/python.webp";
    import arduinoIcon from "../assets/aruino.webp";

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
    <h1>I'm <span class="darker">Stephen</span> Gruzin</h1>
    <p>Software Developer, Programmer, Designer</p>
</section>
<section id="about">
    <h1 class="desc">I'm a freelance software <span class="better">developer</span> that specialises in systems <span class="better">programming</span>, creating backend/frontend applications, implementing best practices for higher seo <span class="better">ratings</span>. I also specialise in pcb design and have created multiple arduino robots.</h1>
</section>
<section class="langs">
    <h1 class="desc">The <span class="better">languages</span> I use:</h1>
    <div class="icons">
        <Language title="Arduino" src={arduinoIcon}/>
        <Language golang title="Golang" src={goicon}/>
        <Language title="TypeScript" src={tsicon}/>
        <Language title="Python" src={pythonicon}/>
        <Language title="JavaScript" src={jsicon}/>
        <Language title="HTML" src={htmlicon}/>
        <Language title="CSS" src={cssIcon}/>
    </div>
</section>
<section id="about">
    <h1 class="desc">I enjoy playing <span class="better">volleyball</span>, as well as soccer, and eating thai food. I started programming at the age of 13 and I never looked back. I then proceeded to learn how program arduio boards, and started making usefull robots around the house.</h1>
</section>
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
        flex-direction: column;
        flex-shrink: 0;
        /* background-color: red; */
    }

    h1 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        font-size: clamp(1.75rem, -1.5rem + 8vw, 4rem);
        text-shadow: 0px 3px 0px #000000,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
    }

    .desc {
        font-size: clamp(1.25rem, -1.5rem + 8vw, 4rem);
        width: 90%;
        background-color: #000000a9;
        line-height: 150%;
        /* text-shadow: 2px 4px 3px rgba(0,0,0,0.3); */
        /* text-shadow: 2px 4px 3px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2); */
    }

    .langs {
        gap: 40px;
    }

    p {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        font-size: clamp(0.75rem, -1.1rem + 8vw, 1.1rem);
        margin-top: 20px;
    }

    .darker {
        color: #51b5cc;
        text-decoration: underline;
    }
    .better {
        color: #51b5cc;
    }

    .icons {
        display: grid;
        width: 100%;
        column-gap: 10px;
        row-gap: 10px;
        grid-template-columns: repeat(auto-fill, 210px);
        align-items: center;
        justify-content: center;
    }
</style>