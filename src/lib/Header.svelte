<script lang="ts">
	import { Github, Linkedin } from "@lucide/svelte";
	import { Button } from "./components/ui/button";

    function scrollToSection(id: string) {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }
</script>

<header class="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onclick={() => scrollToSection("hero")} class="text-xl font-bold text-foreground hover:text-primary transition-colors">SG</button>

        <nav class="hidden md:flex items-center gap-8">
            <button onclick={() => scrollToSection("about")} class="text-sm text-muted-foreground hover:text-foreground transition-colors">About</button>
            <button onclick={() => scrollToSection("projects")} class="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</button>
            <button onclick={() => scrollToSection("contact")} class="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</button>
        </nav>

        <div class="flex items-center gap-2">
            <Button variant="ghost" size="icon">
                <a href="https://github.com/Stephen10121" target="_blank" rel="noopener noreferrer">
                    <Github class="h-5 w-5" />
                    <span class="sr-only">GitHub</span>
                </a>
            </Button>
            <Button variant="ghost" size="icon">
                <a href="https://www.linkedin.com/in/stephen-gruzin-6aba31204/" target="_blank" rel="noopener noreferrer">
                    <Linkedin class="h-5 w-5" />
                    <span class="sr-only">LinkedIn</span>
                </a>
            </Button>
        </div>
    </div>
</header>