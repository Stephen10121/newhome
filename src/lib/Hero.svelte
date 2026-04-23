<script lang="ts">
	import { contactDialogOpen } from "./store";

    function scrollToSection(id: string) {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }
</script>

<section class="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20 relative z-10">
    <div class="max-w-360 mx-auto w-full flex flex-col items-center text-center">
        <div class="space-y-4 mb-12 flex flex-col items-center">
            <span class="font-label text-sm tracking-[0.3em] text-[#bacac4] uppercase">Portfolio {(new Date()).getFullYear()}</span>
            <h1 class="text-7xl md:text-9xl font-headline font-bold tracking-tighter leading-[0.9] hero-gradient">
                Stephen<br/>Gruzin
            </h1>
            <p class="text-2xl md:text-3xl font-light text-[#bacac4] text-on-surface-variant max-w-2xl font-body">
                Software Developer specializing in building high-performance, intuitive digital ecosystems.
            </p>
        </div>
        <div class="flex flex-wrap gap-6 justify-center">
            <button onclick={() => scrollToSection("work")} class="cursor-pointer bg-[#5df7dc] text-black px-10 py-4 rounded-lg font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:shadow-[0_0_20px_rgba(125,255,229,0.3)]">
                View Projects
            </button>
            <button onclick={() => contactDialogOpen.set(true)} class="border backdrop-blur-md px-10 py-4 rounded-lg font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:opacity-80 cursor-pointer">Get in Touch</button>
        </div>
    </div>
</section>

<style>
    .hero-gradient {
        background: linear-gradient(45deg, #7dffe5 0%, #1ae6c8 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
</style>