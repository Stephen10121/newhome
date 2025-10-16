<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
	import { ExternalLink, Github } from "@lucide/svelte";
	import { Button } from "./components/ui/button";
    
    const projects = [
    {
        title: "svelte-windows",
        description:
        "A draggable and resizable window manager that works seamlessly in your projects. Works in scroll areas, overflow situations, with intelligent window stacking.",
        tags: ["Svelte", "TypeScript", "Node Package"],
        github: "https://github.com/Stephen10121/window",
        demo: "https://windows.stephengruzin.dev",
    },
    {
        title: "TailorCal",
        description:
        "TailorCal connects to your planning center account and enables you to create custom calendars and share them across multiple devices.",
        tags: ["Resend", "Golang", "Stripe"],
        github: "https://github.com/Stephen10121/planningcentercal",
        demo: "https://tailorcal.com",
    },
    {
        title: "Local Fence Co.",
        description: "Local Fence Co is your premier fence contractor in Vancouver, WA, dedicated to transforming your property into a safe and stylish sanctuary.",
        tags: ["SEO", "Analytics", "Image Optimisation"],
        github: "https://github.com/Stephen10121/lfc",
        demo: "https://thelocalfenceco.com/",
    },
]
</script>

<section id="projects" class="relative py-24 px-4 bg-secondary/20">
    <div class="container mx-auto max-w-6xl">
        <div class="space-y-4 mb-16 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-balance">Featured Projects</h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                A selection of recent work showcasing my approach to solving real-world problems through code.
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each projects as project (project.title)}
                <Card.Root class="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                    <Card.Header>
                        <h3 class="text-2xl font-semibold">{project.title}</h3>
                    </Card.Header>
                    <Card.Content class="flex-1">
                        <p class="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                        <div class="flex flex-wrap gap-2">
                            {#each project.tags as tag (tag)}
                                <span class="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                            {/each}
                        </div>
                    </Card.Content>
                    <Card.Footer class="gap-2">
                        <Button variant="outline" size="sm" class="flex-1 bg-transparent hover:text-foreground cursor-pointer">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" class="flex items-center justify-items-center">
                            <Github class="h-4 w-4 mr-2" />
                            Code
                            </a>
                        </Button>
                        <Button size="sm" class="flex-1 cursor-pointer">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" class="flex items-center justify-items-center">
                            <ExternalLink class="h-4 w-4 mr-2" />
                            Demo
                            </a>
                        </Button>
                    </Card.Footer>
                </Card.Root>
            {/each}
        </div>
    </div>
</section>