<script lang="ts">
    import ship from "../assets/window.png";
    import { browser } from '$app/environment'
    export let width = 5000;

    let width2: number = 1000;
    let innerHeight: number;
    let innerWidth: number;

    $: {
        console.log(innerWidth);
    }
    
    $: {
        if (browser) {
            width2 = innerWidth / 4;
            // width2 = Math.max(width, Math.max(window.innerHeight,window.innerWidth));
            console.log(width, window.innerHeight, window.innerWidth)
        }
    }
</script>

<svelte:window 
	bind:innerWidth
    bind:innerHeight
  />

<div class="background-container">
    <div class="test">
        <img src={ship} style="--width: {width2}%;" alt="Space Ship Interior" />
    </div>
</div>

<style>
    .background-container{
        position: fixed;
        top: 0;
        left:0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .test {
        width: 400px;
        height: 400px;
        background-color: red;
        position: relative;
    }

    img {
        --width: 10000%;
        position: absolute;
        width: var(--width);
        opacity: 0.5;
        left: 200px;
        top: 200px;
        transform: translate(-50%, -50%);
    }
</style>