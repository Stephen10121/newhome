<script lang="ts">
	import { Satellite } from "@lucide/svelte";
    import { page } from '$app/state';

    let satBox: HTMLDivElement | undefined = $state();
    let angle = $state(320);

    function mouseMoved(e: MouseEvent) {
        if (!satBox) return;
        const satBoxDimentions = satBox.getBoundingClientRect();
        let mouseX = e.pageX - satBoxDimentions.x - satBoxDimentions.width / 2;
        let mouseY = satBoxDimentions.y + satBoxDimentions.height / 2 - e.pageY;

        const angle2 = Math.atan2(mouseY, mouseX) * (180/Math.PI);

        if (angle2 < 0) {
            angle = Math.floor(Math.abs(angle2));
        } else {
            angle = Math.floor(180 - angle2 + 180);
        }
    }
</script>

<svelte:window onmousemove={mouseMoved} />

<svelte:head>
    <title>An Error Occured</title>
</svelte:head>

<main class="relative z-10 grow flex flex-col items-center justify-center px-6 py-24 text-center min-h-screen">
    <div class="mb-8">
        <span class="font-label text-xs tracking-[0.4em] uppercase text-primary bg-primary/10 px-4 py-1 rounded-full border border-primary/20 backdrop-blur-sm">
            PROTOCOL_ERROR: {page.status}
        </span>
    </div>

    <div class="relative group">
        <h1 class="font-display font-black text-[10rem] md:text-[18rem] leading-none tracking-tighter text-on-surface opacity-90 glitch-text transition-all duration-700">
            {page.status}
        </h1>

        <div bind:this={satBox} style="transform: rotate({angle + 45}deg);" class="absolute -top-10 -right-10 w-24 h-24 border border-primary/20 rounded-lg backdrop-blur-xl flex items-center justify-center transition-transform duration-50">
            <Satellite class="h-10 w-10 text-primary text-4xl" />
        </div>
    </div>

    <div class="max-w-xl mt-8 space-y-6">
        <h2 class="font-display text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
            You've drifted beyond the known perimeter.
        </h2>
        <p class="text-on-surface-variant text-lg leading-relaxed font-light">
            The coordinates you requested do not exist in the SG mainframe. Your current location is outside the secure boundary.
        </p>
    </div>

    <div class="mt-12 flex flex-col items-center gap-6">
        <a class="group relative px-10 py-5 bg-primary text-black font-label font-black tracking-widest uppercase text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(26,230,200,0.4)] hover:scale-[1.02] active:scale-95" href="/">
            <span class="relative z-10 flex items-center gap-3">
                <span class="material-symbols-outlined">home</span>
                Return to Base
            </span>
            <div class="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
        </a>

        <div class="flex items-center gap-4 pt-8">
            <div class="h-px w-12 bg-outline-variant/30"></div>
            <span class="font-label text-[10px] tracking-[0.2em] text-outline uppercase">Signal Integrity: 4%</span>
            <div class="h-px w-12 bg-outline-variant/30"></div>
        </div>
    </div>
</main>

<style>
    .glitch-text {
        text-shadow: 0.05em 0 0 #ddb7ff, -0.05em -0.025em 0 #7dffe5, -0.025em 0.05em 0 #6f00be;
    }
</style>