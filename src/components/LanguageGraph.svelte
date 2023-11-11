<script lang="ts">
	import LangSlider from "./LangSlider.svelte";
    import javascriptIcon from "../assets/javascript.webp";
    import arduinoIcon from "../assets/aruino.webp";
    import typescriptIcon from "../assets/typescript.png";
    import pythonIcon from "../assets/python.webp";
    import htmlIcon from "../assets/html.png";
    import cssIcon from "../assets/css.png";
    import golangIcon from "../assets/go.svg";
	import { onMount } from "svelte";

    let observeTarget: HTMLDivElement;
    let show = true;

    onMount(() => {
        let observer = new IntersectionObserver((e) => show = e[0].isIntersecting);
        observer.observe(observeTarget);

        return () => {
            observer.disconnect();
        }
    });
</script>
<section>
    <h2>Language Graph</h2>
    <LangSlider title="Javascript" src={javascriptIcon} link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" percentage={90} color="#f7df1e" {show} />
    <LangSlider title="Arduino" src={arduinoIcon} link="https://www.arduino.cc/en/Guide" percentage={50} color="#199aa0" {show} />
    <LangSlider title="TypeScript" src={typescriptIcon} link="https://www.typescriptlang.org" percentage={90} color="#3178c6" {show} />
    <LangSlider title="Python" src={pythonIcon} link="https://www.python.org" percentage={95} color="#f2bb30" {show} />
    <LangSlider title="CSS" src={cssIcon} link="https://www.w3schools.com/css/" percentage={70} color="#2196f3" {show} />
    <LangSlider title="HTML" src={htmlIcon} link="https://www.w3schools.com/html/" percentage={95} color="#ff5722" {show} />
    <LangSlider title="Go" src={golangIcon} link="https://go.dev/" percentage={70} color="#00acd7" {show} />
    <div class="observer" bind:this={observeTarget}></div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        padding: 100px;
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
    }

    .observer {
        width: 1px;
        height: 1px;
    }

    h2 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        text-shadow: 0px 3px 0px #000000,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
        font-size: clamp(1.25rem, -1.5rem + 8vw, 2.5rem);
    }
</style>