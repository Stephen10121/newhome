<script lang="ts">
	import About from "@/About.svelte";
	import Contact from "@/Contact.svelte";
	import Header from "@/Header.svelte";
	import Hero from "@/Hero.svelte";
	import Projects from "@/Projects.svelte";
	import Stars from "@/Stars.svelte";
</script>

<svelte:head>
    <title>Stephen Gruzin | Software Developer</title>
    <meta name="description" content="Portfolio of Stephen Gruzin, a software developer passionate about building elegant solutions to complex problems.">
</svelte:head>

<div class="relative min-h-screen">
    <Stars />
    <Header />
    <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </main>
</div>
