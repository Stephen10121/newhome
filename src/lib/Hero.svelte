<script lang="ts">
	import { ArrowDown } from "@lucide/svelte";
	import { Button } from "./components/ui/button";

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }
</script>

<section id="hero" class="relative min-h-screen flex items-center justify-center px-4">
    <div class="container mx-auto text-center space-y-8 pt-16">
    <div class="space-y-4">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-balance">
        <span class="text-foreground">Stephen</span> <span class="text-primary">Gruzin</span>
        </h1>
        <p class="text-xl md:text-2xl text-muted-foreground font-mono">Software Developer</p>
    </div>

    <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
        Building elegant solutions to complex problems. Passionate about creating exceptional user experiences through
        clean code and thoughtful design.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Button size="lg" onclick={() => scrollToSection("projects")} class="min-w-[160px]">
        View Projects
        </Button>
        <Button size="lg" variant="outline" onclick={() => scrollToSection("contact")} class="min-w-[160px]">
        Get in Touch
        </Button>
    </div>

    <button
        onclick={() => scrollToSection("about")}
        class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
    >
        <ArrowDown class="h-6 w-6 text-muted-foreground" />
    </button>
    </div>
</section>
