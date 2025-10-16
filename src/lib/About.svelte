<script lang="ts">
	import { Code, Rocket, Zap } from "@lucide/svelte";
    import * as Card from "$lib/components/ui/card/index.js";


    const skills = [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: "Building scalable applications with modern frameworks and best practices.",
        },
        {
            icon: Rocket,
            title: "Performance Optimization",
            description: "Creating fast, efficient solutions that deliver exceptional user experiences.",
        },
        {
            icon: Zap,
            title: "Rapid Prototyping",
            description: "Transforming ideas into working products with speed and precision.",
        },
    ]
    
</script>

<section id="about" class="relative py-24 px-4">
    <div class="container mx-auto max-w-6xl">
        <div class="space-y-4 mb-16 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-balance">About Me</h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                I'm a software developer passionate about crafting elegant solutions to complex problems. With expertise
                across the full stack, I focus on building applications that are both powerful and intuitive.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
            {#each skills as skill (skill.title)}
                <Card.Root class="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                    <Card.Content class="pt-6 space-y-4">
                        <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <skill.icon class="h-6 w-6 text-primary" />
                        </div>
                        <h3 class="text-xl font-semibold">{skill.title}</h3>
                        <p class="text-muted-foreground leading-relaxed">{skill.description}</p>
                    </Card.Content>
                </Card.Root>
            {/each}
        </div>
    </div>
</section>