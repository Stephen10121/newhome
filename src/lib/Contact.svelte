<script lang="ts">
	import { Mail, Github, Linkedin } from "@lucide/svelte";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Button } from "./components/ui/button";


    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "me@stephengruzin.dev",
            href: "mailto:me@stephengruzin.dev",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "@Stephen10121",
            href: "https://github.com/Stephen10121",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "Stephen Gruzin",
            href: "https://www.linkedin.com/in/stephen-gruzin-6aba31204/",
        },
    ]
</script>

    <section id="contact" class="relative py-24 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="space-y-4 mb-16 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-balance">Get in Touch</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Let's build something amazing
            together.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
            {#each contactMethods as method (method.label)}
                <Card.Root class="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <Card.Content class="pt-6 text-center space-y-4">
                    <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <method.icon class="h-6 w-6 text-primary" />
                    </div>
                    <div>
                    <p class="text-sm text-muted-foreground mb-1">{method.label}</p>
                    <Button variant="link" class="h-auto p-0 text-foreground">
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.value}
                        </a>
                    </Button>
                    </div>
                </Card.Content>
                </Card.Root>
            {/each}
        </div>

        <div class="mt-16 text-center">
          <p class="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stephen Gruzin. Built with SvelteKit.
          </p>
        </div>
      </div>
    </section>