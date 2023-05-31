<script lang="ts">
    import { onMount } from "svelte";

    let mounted = false;
    export let text = "Notification";

    onMount(() => {
        setTimeout(() => {
            mounted = true;
        }, 1);
        setTimeout(() => {
            mounted = false;
        }, 4000);
    });
</script>

<section class="{mounted ? "mount" : ""}">
    <h1>{text}</h1>
    <div class="progress">
        <div class="inner"></div>
    </div>
</section>

<style>
    section {
        --transformAmount: calc(100% + 6px);
        height: 50px;
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: fixed;
        bottom: 5px;
        right: 5px;
        z-index: 200;
        border-radius: 10px;
        display: grid;
        grid-template-rows: 45px 5px;
        overflow: hidden;
        transform: translateX(var(--transformAmount));
        /* transition: transform 1s cubic-bezier(0.52, 1.38, 0.74, -0.47); */
        transition: transform 0.15s linear;
        min-width: 200px;
    }

    .mount {
        --transformAmount: calc(0);
    }

    h1 {
        padding: 0 10px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Poppins", sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        color: #000000;
    }

    .progress {
        width: 100%;
        height: 5px;
        background-color: #dfdfdf;
    }

    .inner {
        width: 0;
        height: 5px;
        background-color: #d69c42;
        animation: progressTime 4s linear forwards;
    }

    @keyframes progressTime {
        0% {
            width: 0;
        }

        100% {
            width: 100%;
        }
    }
</style>