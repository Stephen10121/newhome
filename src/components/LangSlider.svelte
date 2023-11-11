<script lang="ts">
    export let title: string;
    export let src: string;
    export let link: string;
    export let percentage: number | string;
    export let color: string;
    export let show = true;
    export let delayMs = 0;
</script>

<div class="slider" title={title} on:mousedown={() => show =!show} style="--color:{color};">
    <a href={link} target="_blank">
        <img src={src} alt={title}>
    </a>
    <div class="sliderOutline">
        <div class="sliderMovable" style="--percentage:{show ? percentage : "0"}%;--delay:{delayMs}ms;" />
    </div>
</div>

<style>
    .slider {
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .sliderOutline {
        width: 100%;
        height: 20px;
        background-color: #000000;
        border: 1px solid var(--color);
        padding: 1px;
        border-radius: 10px;
        overflow: hidden;
    }

    .sliderMovable {
        height: 100%;
        width: var(--percentage);
        background-color: var(--color);
        border-radius: 10px;
        transition: width 0.5s ease-in var(--delay);
    }

    img {
        height: 30px;
    }
</style>