<script lang="ts">
    import rock from "../assets/rock.png";
    import { fade, fly } from 'svelte/transition';

    export let title: string;
    export let src: string;
    export let golang = false;
</script>

<section in:fly="{{ x: Math.floor(Math.random()*1000), duration: 2000 }}" out:fade>
    <img src={rock} alt="Meteor Background" class="rock" />
    <img class="lang-icon" src={src} alt={title} />
    <p>{title}</p>
    {#if golang}
        <div class="golang" />
    {/if}
</section>

<style>
    section {
        padding: 40px 50px 20px 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        position: relative;
    }

    .lang-icon {
        width: 100px;
        height: 100px;
    }

    .rock {
        position: absolute;
        width: 100%;
        z-index: -1;
        top: 0;
        left: 0;
    }

    p {
        font-family: 'Roboto Mono', monospace;
        color: #000000;
        font-weight: 600;
        font-size: 1.25rem;
    }

    .golang {
        position: absolute;
        width: 53px;
        height: 30px;
        background-color: #ffffff;
        top: 52px;
        left: 81px;
        z-index: -1;
    }
</style>