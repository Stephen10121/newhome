<script lang="ts">
	import { onDestroy } from "svelte";

    import cssIcon from "../../assets/css.png";
    import tsicon from "../../assets/typescript.png";
    import jsicon from "../../assets/javascript.webp";
    import goicon from "../../assets/golang.png";
    import htmlicon from "../../assets/html.png";
    import pythonicon from "../../assets/python.webp";
    import arduinoIcon from "../../assets/aruino.webp";
	import { showContactStore } from "../../function/store";
	import ContactCard from "../../components/ContactCard.svelte";
	import Language from "../../components/Language.svelte";
	import Footer from "../../components/Footer.svelte";
	import TextTransition from "../../components/TextTransition.svelte";
    

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
    <h1><span class="darker"><a href="https://www.linkedin.com/in/stephen-gruzin-6aba31204/" target="_blank">Stephen</a></span> Gruzin</h1>
    <p><TextTransition textArray={["Software", "Web", "Frontend", "Backend", "Fullstack"]}/> Developer</p>
</section>
<section class="about">
    <h2 class="desc">
        Stephen Gruzin is a fullstack web developer who started programming at the age of 16. He has a knack for creating stunning and intuitive web applications that solve real-world problems.
        Stephen is proficient in <span class="better">HTML</span>, <span class="better">CSS</span>, <span class="better">(Java/Type)Script</span>, and a variety of back-end programming languages.
        He is always eager to learn new <span class="better">technologies</span> and improve his <span class="better">skills.</span> When he's not coding, you can find him exploring the outdoors or at church.
    </h2>
</section>
<section class="langs">
    <h2 class="desc">The <span class="better">languages</span> I use:</h2>
    <div class="icons">
        <Language title="Arduino" src={arduinoIcon} link="https://www.arduino.cc/en/Guide"/>
        <Language golang title="Golang" src={goicon} link="https://go.dev/"/>
        <Language title="TypeScript" src={tsicon} link="https://www.typescriptlang.org/"/>
        <Language title="Python" src={pythonicon} link="https://www.python.org/"/>
        <Language title="JavaScript" src={jsicon} link="https://www.javascript.com/"/>
        <Language title="HTML" src={htmlicon} link="https://www.w3schools.com/html/"/>
        <Language title="CSS" src={cssIcon} link="https://www.w3schools.com/css/"/>
    </div>
</section>
<section class="about">
    <h2 class="desc"><br><br>I enjoy playing <span class="better">volleyball</span>, as well as soccer, and eating thai food. I started programming at the age of 13 and I never looked back. I then proceeded to learn how program arduio boards, and started making usefull robots around the house.</h2>
</section>

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

    .about {
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%);
        min-height: 100vh;
    }

    h1 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        font-size: clamp(2rem, -1.5rem + 8vw, 4rem);
        text-shadow: 0px 3px 0px #000000,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
    }

    .desc {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        text-shadow: 0px 3px 0px #000000,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
        font-size: clamp(1.25rem, -1.5rem + 8vw, 2.5rem);
        width: 90%;
        /* background-color: #000000a9; */
        line-height: 1.3;
        /* line-height: 26pt; */
        /* text-shadow: 2px 4px 3px rgba(0,0,0,0.3); */
        /* text-shadow: 2px 4px 3px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2); */
        /* color: black; */
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
        text-align: center;
    }

    .darker {
        color: var(--accent-color);
        transition: color 0.15s linear;
        text-decoration: underline;
    }

    .darker a {
        color: var(--accent-color);
        transition: color 0.15s linear;
    }
    .better {
        color: var(--accent-color);
        transition: color 0.15s linear;
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