<script lang="ts">
    import earthPicture from "../assets/earth2.png";
    import spaceSuit from "../assets/spacesuit.png";
    import rocketImg from "../assets/rocket.png";
	import TwinklyStars from "./TwinklyStars.svelte";

    let sect: HTMLElement;
    let sect2: HTMLElement;
    let sect3: HTMLElement;
    let suit: HTMLElement;
    let rocket: HTMLElement;

    export let scrollPosition: number;

    // $: {
    //     if (sect) {
    //         sect.scrollTo(0, scrollPosition / 4);
    //         sect2.scrollTo(0, scrollPosition / 2);
    //         sect3.scrollTo(0, scrollPosition / .7);
    //         suit.style.width = `${200 - scrollPosition/17}px`;
    //         rocket.style.transform = `rotate(${365 - scrollPosition/30}deg) translateX(${-scrollPosition/3}px)`;
    //     }
    // }
    $: {
        if (sect) {
            sect.scrollTo(0, scrollPosition / 3);
            sect2.scrollTo(0, scrollPosition / 1);
            sect3.scrollTo(0, scrollPosition / .7);
            suit.style.width = `${100 - scrollPosition/17}px`;
            rocket.style.transform = `rotate(${365 - scrollPosition/30}deg) translateX(${-scrollPosition/4}px)`;
            suit.style.transform = `translateX(${scrollPosition/4}px) rotate(${365 - scrollPosition/10}deg)`;
        }
    }
</script>
<section class="parallax">
    <TwinklyStars />
    <section class="earth" bind:this={sect}>
        <div></div>
        <img src={earthPicture} alt="Earth" />
        <section style="min-height: 20%"></section>
    </section>
    <section class="suit" bind:this={sect2}>
        <div></div>
        <section class="img">
            <img bind:this={suit} src={spaceSuit} alt="Earth" />
        </section>
        <div></div>
    </section>
    <section class="rocket" bind:this={sect3}>
        <div></div>
        <section class="img">
            <img bind:this={rocket} src={rocketImg} alt="Earth" />
        </section>
        <div></div>
        <div></div>
        <div></div>
    </section>
</section>

<style>
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

    .suit,
    .rocket {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
    }

    .img {
        width: 100%;
        height: 100%;
    }

    .rocket img {
        width: 200px;
        margin-top: 515px;
        margin-left: 50%;
    }

    .suit img {
        /* position: absolute;
        top: 0;
        left: 0; */
        margin-top: 220px;
        margin-left: calc(50% - 110px);
        width: 100px;
        /* animation: rotate2 4s linear infinite; */
    }

    @keyframes rotate2 {
        0% {
            transform: scaleX(-1) rotate(0deg);
        }
        100% {
            transform: scaleX(-1) rotate(365deg);
        }
    }

    section {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    section::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

    section div {
        min-height: 70%;
    }

    .earth img {
        /* position: absolute;
        top: 0;
        left: 0; */
        width: 100%;
    }
</style>