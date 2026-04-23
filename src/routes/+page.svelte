<script lang="ts">
	import AboutMe from "$lib/AboutMe.svelte";
	import FeaturedProjects from "$lib/FeaturedProjects.svelte";
	import GetInTouch from "$lib/GetInTouch.svelte";
	import Hero from "$lib/Hero.svelte";
	import TopNavBar from "$lib/TopNavBar.svelte";
</script>

<svelte:head>
    <title>Stephen Gruzin | Software Developer</title>
    <meta name="description" content="Portfolio of Stephen Gruzin, a software developer passionate about building elegant solutions to complex problems.">
</svelte:head>

<main class="relative overflow-hidden">
    <TopNavBar />
    <Hero />
    <AboutMe />
    <FeaturedProjects />
    <GetInTouch />
</main>