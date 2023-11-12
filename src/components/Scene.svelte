<script lang="ts">
    import earthPicture from "../assets/earth2.webp";
    import spaceSuit from "../assets/spacesuit.webp";
	import { rotateEarthDegrees } from "../function/store";
	import TwinklyStars from "./TwinklyStars.svelte";

    let earthSection: HTMLElement;
    let suitSection: HTMLElement;
    let suit: HTMLElement;

    export let scrollPosition: number;

    $: {
        if (earthSection && suitSection && suit) {
            earthSection.scrollTo(0, scrollPosition / 3);
            suitSection.scrollTo(0, scrollPosition / 1);
            suit.style.width = `${100 - scrollPosition/17}px`;
            suit.style.transform = `translateX(${scrollPosition/4}px) rotate(${365 - scrollPosition/10}deg)`;
        }
    }
</script>

<section class="parallax">
    <TwinklyStars />
    <section class="earth" bind:this={earthSection}>
        <div class="space" />
        <img src={earthPicture} alt="Earth" style="--earth-rotate:{$rotateEarthDegrees}deg;" />
        <section style="min-height: 20%" />
    </section>
    <section class="suit" bind:this={suitSection}>
        <div class="space" />
        <section class="img">
            <img bind:this={suit} src={spaceSuit} alt="Earth" />
        </section>
        <div class="space" />
    </section>
</section>

<style>
    section {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    section::-webkit-scrollbar {display: none;}

    .parallax {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        isolation: isolate;
    }

    .earth {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
        z-index: 2;
    }

    .earth img {width: 100%;}

    .earth img {
        transform: rotate(var(--earth-rotate));
        transition: transform 1s linear;
    }

    .suit {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
    }

    .suit img {
        margin-top: 220px;
        margin-left: calc(50% - 110px);
        width: 100px;
    }

    .img {
        width: 100%;
        height: 100%;
    }

    @keyframes rotate2 {
        0% {transform: scaleX(-1) rotate(0deg);}
        100% {transform: scaleX(-1) rotate(365deg);}
    }

    .space {min-height: 70%;}
</style>