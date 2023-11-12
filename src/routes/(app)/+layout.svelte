<script lang="ts">
	import { page } from "$app/stores";
	import { onDestroy } from "svelte";
	import { scrollPositionStore } from "../../function/store";
    import linkedInImg from "../../assets/linkedin.svg";
    import githubImg from "../../assets/github.svg";
	import Scene from "../../components/Scene.svelte";

    let main: HTMLDivElement;
    export let data;
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

    let currentAccent = data.accentColor;
    function accentChange() {
        currentAccent = currentAccent < data.accentColorArray.length-1 ? currentAccent+1 : 0;
        const d = new Date();
        d.setTime(d.getTime() + (1000*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = `accentColor=${currentAccent}; expires=${expires}; path=/;`;
    }

    onDestroy(() => {
        scrollPositionStoreUnsubscribe();
    });
</script>

<header>
    <h1 on:mousedown={accentChange}>SG</h1>
    <nav>
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
            <li class="left-margin">
                <a class="icon" href="https://www.linkedin.com/in/stephen-gruzin-6aba31204/" target="_blank" title="My LinkedIn">
                    <div>
                        <img src={linkedInImg} alt="LinkedIn Icon" />
                    </div>
                </a>
            </li>
            <li>
                <a class="icon" href="https://github.com/Stephen10121" target="_blank" title="My Github">
                    <div>
                        <img src={githubImg} alt="Github Icon" />
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <!-- <button on:click={() => showContactStore.set(true)}>Contact</button> -->
</header>

<Scene {scrollPosition} />

<main style="--accent-color: {data.accentColorArray[currentAccent]};">
    <section class="main-box">
        <div id="scroll-main" bind:this={main} on:scroll={scroll}>
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
        width: 100vw;
        height: calc(100vh - 70px);
        height: calc(100dvh - 70px);
        position: relative;
    }

    h1 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 500;
        display: none;
        cursor: pointer;
    }

    ul {
        display: flex;
        align-items: center;
        width: 300px;
        justify-content: space-between;
        gap: 10px;
    }

    li {
        list-style: none;
    }

    li.left-margin {
        margin-left: 10px;
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
        /* row-gap: 200px; */
        position: relative;
    }

    .main-box div::-webkit-scrollbar {
        display: none;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon:hover {
        filter: invert(0.5);
    }

    .icon div {
        width: 25px;
        height: 25px;
    }

    .icon img {
        color: #ffffff;
        width: 100%;
        height: 100%;
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