<script>
	import { SquareArrowOutUpRight, SquareTerminal } from "@lucide/svelte";
    import dark1 from "$lib/assets/dark1.jpg";
    import dark2 from "$lib/assets/dark2.jpg";
    import darkfence from "$lib/assets/darkfence.jpg";
</script>
<section class="py-32 px-8 md:px-24 relative z-10" id="work">
    <div class="max-w-360 mx-auto">
        <div class="flex justify-between items-end mb-16">
            <div class="max-w-xl">
                <h2 class="text-5xl font-headline font-bold tracking-tight text-on-surface mb-4">Selected Works</h2>
                <p class="text-on-surface-variant">A collection of open-source tools, client applications, and experimental prototypes.</p>
            </div>
            <div class="hidden md:block">
                <span class="text-on-surface-variant font-label text-xs uppercase tracking-widest italic">Scroll to explore</span>
            </div>
        </div>

        <!-- Bento Grid of Projects -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            <!-- Project 1 -->
            <div class="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high glass-card min-h-112.5">
                <img
                    src={dark1}
                    alt="Infosections themed background"
                    class="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-linear-to-t from-surface-container-highest via-transparent to-transparent opacity-90"></div>
                <div class="relative h-full flex flex-col justify-end p-10">
                    <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Svelte</span>
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">TypeScript</span>
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Golang</span>
                    </div>
                    <h3 class="text-4xl font-headline font-bold text-on-surface mb-3">InfoSections</h3>
                    <p class="text-on-surface-variant max-w-md text-lg">A unified view of every event, sortable by location, tags, and custom filters so you can focus on what's happening, where it matters.</p>
                    <div class="mt-6 flex flex-col sm:flex-row gap-4 max-w-md">
                        <a class="flex items-center justify-between flex-1 group/link border border-outline-variant/30 bg-surface-container-low/40 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300" href="https://infosections.com" target="_blank">
                            <span class="text-sm font-headline font-medium">Live Website</span>
                            <SquareArrowOutUpRight class="w-4 h-4 text-sm group-hover/link:translate-x-1 transition-transform" />
                        </a>
                        <a class="flex items-center justify-between flex-1 group/link border border-outline-variant/30 bg-surface-container-low/40 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300" href="https://github.com/Stephen10121/infosections" target="_blank">
                            <span class="text-sm font-headline font-medium">GitHub Repo</span>
                            <SquareTerminal class="w-5 h-5 text-sm group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high glass-card">
                <div class="relative p-10 h-full flex flex-col">
                    <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">JavaScript</span>
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Library</span>
                    </div>
                    <h3 class="text-3xl font-headline font-bold text-on-surface mb-3">svelte-windows</h3>
                    <p class="text-on-surface-variant mb-8">A powerful OS-style windowing system for Svelte applications, featuring dragging, resizing, and layering.</p>
                    <div class="mt-auto flex flex-col gap-3">
                        <a class="flex items-center justify-between group/link border border-outline-variant/30 bg-surface-container-low/40 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300" href="https://windows.stephengruzin.dev" target="_blank">
                            <span class="text-sm font-headline font-medium">Live Website</span>
                            <SquareArrowOutUpRight class="w-4 h-4 text-sm group-hover/link:translate-x-1 transition-transform" />
                        </a>
                        <a class="flex items-center justify-between group/link border border-outline-variant/30 bg-surface-container-low/40 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300" href="https://github.com/Stephen10121/window" target="_blank">
                            <span class="text-sm font-headline font-medium">GitHub Repo</span>
                            <SquareTerminal class="w-5 h-5 text-sm group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Project 3 -->
            <div class="md:col-span-12 group relative overflow-hidden rounded-xl bg-surface-container-high glass-card min-h-100">
                <img
                    src={dark2}
                    alt="MKB Renovations"
                    class="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-linear-to-r from-surface-container-highest via-surface-container-highest/60 to-transparent opacity-90"></div>
                <div class="relative h-full flex flex-col justify-center p-10">
                    <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Cloudflare</span>
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Tailwind CSS</span>
                    </div>
                    <h3 class="text-4xl font-headline font-bold text-on-surface mb-3">MKB Renovations LLC</h3>
                    <p class="text-on-surface-variant max-w-md text-lg mb-6">
                    Expert kitchen, bathroom, and whole-house renovations. Where quality craftsmanship meets exceptional design, from concept to completion.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 max-w-md">
                        <a class="flex items-center justify-between flex-1 group/link border border-outline-variant/30 bg-surface-container-low/40 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300" href="https://mkb-renovations.com" target="_blank">
                            <span class="text-sm font-headline font-medium">Live Website</span>
                            <SquareArrowOutUpRight class="w-4 h-4 text-sm group-hover/link:translate-x-1 transition-transform" />
                        </a>
                        <a class="flex items-center justify-between flex-1 group/link border border-outline-variant/30 bg-surface-container-low/40 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300" href="https://github.com/Stephen10121/MKBReno" target="_blank">
                            <span class="text-sm font-headline font-medium">GitHub Repo</span>
                            <SquareTerminal class="w-5 h-5 text-sm group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Project 4 -->
            <div class="md:col-span-12 group relative overflow-hidden rounded-xl bg-surface-container-high glass-card min-h-100">
                <!-- <img alt="MKB Renovations" class="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src={darkfence}/> -->
                <img
                    src={darkfence}
                    alt="Local Fence Co"
                    class="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-linear-to-r from-surface-container-highest via-surface-container-highest/60 to-transparent opacity-90"></div>
                <div class="relative h-full flex flex-col justify-center p-10">
                    <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">SvelteKit</span>
                        <span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">SEO</span>
                    </div>
                    <h3 class="text-4xl font-headline font-bold text-on-surface mb-3">Local Fence Co.</h3>
                    <p class="text-on-surface-variant max-w-md text-lg mb-6">
                    A premier fence contractor in Vancouver, WA, dedicated to transforming your property into a safe and stylish sanctuary.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 max-w-md">
                        <a class="flex items-center justify-between flex-1 group/link border border-outline-variant/30 bg-surface-container-low/40 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300" href="https://thelocalfenceco.com/" target="_blank">
                            <span class="text-sm font-headline font-medium">Live Website</span>
                            <SquareArrowOutUpRight class="w-4 h-4 text-sm group-hover/link:translate-x-1 transition-transform" />
                        </a>
                        <a class="flex items-center justify-between flex-1 group/link border border-outline-variant/30 bg-surface-container-low/40 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300" href="https://github.com/Stephen10121/lfc" target="_blank">
                            <span class="text-sm font-headline font-medium">GitHub Repo</span>
                            <SquareTerminal class="w-5 h-5 text-sm group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
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