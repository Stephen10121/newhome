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
	import { rotateEarthDegrees } from "../function/store";

    let observeTarget: HTMLDivElement;
    let show = true;
    let proficiencyTimeline = {
        "2020": {
            Javascript: 10,
            Arduino: 0,
            TypeScript: 0,
            Python: 0,
            CSS: 20,
            HTML: 30,
            Go: 0
        },
        "2021": {
            Javascript: 20,
            Arduino: 20,
            TypeScript: 0,
            Python: 20,
            CSS: 40,
            HTML: 50,
            Go: 0
        },
        "2022": {
            Javascript: 60,
            Arduino:40,
            TypeScript: 50,
            Python: 50,
            CSS: 55,
            HTML: 70,
            Go: 20
        },
        "2023": {
            Javascript: 90,
            Arduino: 50,
            TypeScript: 90,
            Python: 95,
            CSS: 70,
            HTML: 95,
            Go: 70
        }
    }
    let option: "2020" | "2021" | "2022" | "2023"= "2023";
    let options = Object.keys(proficiencyTimeline);

    function spinEarth() {
        rotateEarthDegrees.update((prev) => prev+180);
    }

    onMount(() => {
        let observer = new IntersectionObserver((e) => show = e[0].isIntersecting);
        observer.observe(observeTarget);

        return () => {
            observer.disconnect();
        }
    });
</script>
<section>
    <div>
        <h2>Language Graph</h2>
        <select bind:value={option} title="Check my proficiency over the years">
            {#each options as year}
                <option value={year}>{year}</option>
            {/each}
        </select>
    </div>
    <LangSlider title="Javascript" src={javascriptIcon} link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" percentage={proficiencyTimeline[option].Javascript} color="#f7df1e" {show} />
    <LangSlider title="Arduino" src={arduinoIcon} link="https://www.arduino.cc/en/Guide" percentage={proficiencyTimeline[option].Arduino} color="#199aa0" {show} delayMs={70} />
    <LangSlider title="TypeScript" src={typescriptIcon} link="https://www.typescriptlang.org" percentage={proficiencyTimeline[option].TypeScript} color="#3178c6" {show} delayMs={140} />
    <LangSlider title="Python" src={pythonIcon} link="https://www.python.org" percentage={proficiencyTimeline[option].Python} color="#f2bb30" {show} delayMs={210} />
    <LangSlider title="CSS" src={cssIcon} link="https://www.w3schools.com/css/" percentage={proficiencyTimeline[option].CSS} color="#2196f3" {show} delayMs={280} />
    <LangSlider title="HTML" src={htmlIcon} link="https://www.w3schools.com/html/" percentage={proficiencyTimeline[option].HTML} color="#ff5722" {show} delayMs={350} />
    <LangSlider title="Go" src={golangIcon} link="https://go.dev/" percentage={proficiencyTimeline[option].Go} color="#00acd7" {show} delayMs={420} />
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

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    select {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ffffff;
        background: #00000000;
        color: #ffffff;
    }

    select option {
        background: #000000;
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