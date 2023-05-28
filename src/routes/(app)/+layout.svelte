<script lang="ts">
	import { page } from "$app/stores";
	import { onDestroy } from "svelte";
	import { scrollPositionStore } from "../../function/store";
	import Scene from "../../components/Scene.svelte";

    let main: HTMLDivElement;
    const scrollToTop = () => main.scrollTo(0, 0);

	// onMount(scrollToTop);

	$: {
		if ($page.url.pathname && main) scrollToTop();
	}

    let scrollPosition = 0;
    const scrollPositionStoreUnsubscribe = scrollPositionStore.subscribe((value) => scrollPosition = value);

    function scroll(event: any) {
        scrollPositionStore.set(event.target.scrollTop as number);
    }

    onDestroy(() => {
        scrollPositionStoreUnsubscribe();
    });
</script>

<header>
    <h1>SG</h1>
    <nav>
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    <!-- <button on:click={() => showContactStore.set(true)}>Contact</button> -->
</header>

<Scene {scrollPosition} />

<main>
    <section class="main-box">
        <div bind:this={main} on:scroll={scroll}>
            <slot />
        </div>
    </section>
</main>

<style>
    header {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
    }

    main {
        width: 100%;
        height: calc(100% - 70px);
        position: relative;
    }

    h1 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 500;
        display: none;
    }

    ul {
        display: flex;
        width: 250px;
        justify-content: space-between;
        gap: 10px;
    }

    li {
        list-style: none;
    }
    
    li a {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 500;
    }

    .main-box {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
        flex-direction: column;
    }

    .main-box div {
        padding: 0;
        /* background-color: green; */
        width: 100%;
        height: 100%;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        overflow-y: auto;
        scroll-behavior: smooth;
        display: flex;
        flex-direction: column;
        row-gap: 200px;
        position: relative;
    }

    .main-box div::-webkit-scrollbar {
        display: none;
    }

    /* button {
        border: 2px solid #F4FDFF;
        border-radius: 4px;
        background: none;
        font-family: "Poppins", sans-serif;
        color: #F4FDFF;
        letter-spacing: 1px;
        font-weight: 600;
        padding: 7px 15px;
        display: none;
        cursor: pointer;
    } */

    @media (min-width: 850px) {
        .main-box div {
            padding: 100px;
        }
    }

    @media (min-width: 700px) {
        /* button {
            display: block;   
        } */

        header {
            justify-content: space-between;
        }

        h1 {
            display: block;
        }
    }
</style>