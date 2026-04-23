<script lang="ts">
    import { Gauge, Layers, Zap } from "@lucide/svelte";
</script>

<section class="py-32 px-8 md:px-24 bg-surface-container-low/50 relative z-10" id="expertise">
    <div class="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
            <h2 class="text-5xl font-headline font-bold tracking-tight text-on-surface mb-8">
                Crafting <span class="text-primary">elegant</span> logic for complex problems.
            </h2>
            <p class="text-lg text-on-surface-variant leading-relaxed mb-8">
                I am a developer driven by the pursuit of clean architecture and seamless user experiences. My approach blends full-stack technical precision with a designer's eye for detail, ensuring that every application is as intuitive as it is powerful.
            </p>
            <div class="flex items-center gap-4 text-primary font-label text-sm tracking-widest uppercase">
                <span class="w-12 h-px bg-primary/30"></span>
                Based in USA
            </div>
        </div>
        <div class="grid grid-cols-1 gap-6">
            <!-- Feature Cards -->
            <div class="glass-card p-8 rounded-xl transition-all duration-500 hover:translate-x-2">
                <Layers class="text-primary text-4xl mb-4" />
                <h3 class="text-xl font-headline font-bold text-on-surface mb-2">Full-Stack Development</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">Architecting scalable systems from database schemas to pixel-perfect frontends.</p>
            </div>
            
            <div class="glass-card p-8 rounded-xl transition-all duration-500 hover:translate-x-2">
                <Gauge class="text-primary text-4xl mb-4" />
                <h3 class="text-xl font-headline font-bold text-on-surface mb-2">Performance Optimization</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">Eliminating bottlenecks and ensuring sub-second response times across all devices.</p>
            </div>

            <div class="glass-card p-8 rounded-xl transition-all duration-500 hover:translate-x-2">
                <Zap class="text-primary text-4xl mb-4" />
                <h3 class="text-xl font-headline font-bold text-on-surface mb-2">Rapid Prototyping</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">Translating conceptual ideas into functional MVPs with speed and technical rigor.</p>
            </div>
        </div>
    </div>
</section>

<style>
    .glass-card {
        background: rgba(46, 53, 63, 0.4);
        backdrop-filter: blur(12px);
        border-top: 1px solid rgba(125, 255, 229, 0.15);
        border-left: 1px solid rgba(125, 255, 229, 0.1);
    }
</style>