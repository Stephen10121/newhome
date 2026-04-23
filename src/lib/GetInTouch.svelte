<script lang="ts">
	import { AtSign, SquareTerminal, UserRoundSearch } from "@lucide/svelte";
</script>
<section class="py-40 px-8 md:px-24 relative z-10" id="connect">
    <div class="max-w-360 mx-auto">
        <div class="text-center mb-24">
            <h2 class="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface mb-6">Let's build<br/><span class="hero-gradient">together.</span></h2>
            <p class="text-on-surface-variant text-xl">Currently open for new collaborations and technical consultations.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Email Card -->
            <a class="glass-card group p-10 rounded-xl flex flex-col items-center text-center transition-all duration-500 hover:bg-surface-container-highest" href="mailto:me@stephengruzin.dev">
                <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <AtSign class="text-primary w-7 h-7 text-sm group-hover/link:translate-x-1 transition-transform" />
                </div>
                <h4 class="font-headline font-bold text-xl mb-1">Email</h4>
                <p class="text-on-surface-variant">me@stephengruzin.dev</p>
            </a>

            <!-- GitHub Card -->
            <a class="glass-card group p-10 rounded-xl flex flex-col items-center text-center transition-all duration-500 hover:bg-surface-container-highest" href="https://github.com/Stephen10121" target="_blank">
                <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <SquareTerminal class="text-primary w-7 h-7 text-sm group-hover/link:translate-x-1 transition-transform" />
                </div>
                <h4 class="font-headline font-bold text-xl mb-1">GitHub</h4>
                <p class="text-on-surface-variant">@Stephen10121</p>
            </a>

            <!-- LinkedIn Card -->
            <a class="glass-card group p-10 rounded-xl flex flex-col items-center text-center transition-all duration-500 hover:bg-surface-container-highest" href="https://www.linkedin.com/in/stephen-gruzin-6aba31204/" target="_blank">
                <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <UserRoundSearch class="text-primary w-7 h-7 text-sm group-hover/link:translate-x-1 transition-transform" />
                </div>
                <h4 class="font-headline font-bold text-xl mb-1">LinkedIn</h4>
                <p class="text-on-surface-variant">Stephen Gruzin</p>
            </a>
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
    .hero-gradient {
        background: linear-gradient(45deg, #7dffe5 0%, #1ae6c8 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
</style>