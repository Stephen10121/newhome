<script lang="ts">
    function download(url: string) {
        const a = document.createElement('a') as HTMLAnchorElement;
        a.href = url
        a.download = url.split('/').pop() ?? "";
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    function scrollToSection(id: string) {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
</script>

<nav class="fixed top-0 w-full z-50 bg-[#0c141d]/60 backdrop-blur-xl transition-all duration-300 ease-out shadow-[0_20px_40px_rgba(26,230,200,0.04)]">
    <div class="flex justify-between items-center max-w-360 mx-auto px-8 h-20">
        <button onclick={() => scrollToTop()} class="cursor-pointer text-xl font-bold tracking-tighter text-[#dbe3f0] font-headline">SG</button>
        <div class="hidden md:flex items-center gap-10">
            <button onclick={() => scrollToSection("expertise")} class=" cursor-pointer tracking-tight font-medium transition-all duration-300 ease-out text-[#bacac4] hover:text-[#dbe3f0]">Expertise</button>
            <button onclick={() => scrollToSection("work")} class=" cursor-pointer tracking-tight font-medium transition-all duration-300 ease-out text-[#bacac4] hover:text-[#dbe3f0]">Work</button>
            <button onclick={() => scrollToSection("connect")} class=" cursor-pointer tracking-tight font-medium transition-all duration-300 ease-out text-[#bacac4] hover:text-[#dbe3f0]">Connect</button>
        </div>
        <button onclick={() => download("/StephenGruzinDeveloper.pdf")} class="bg-[#5df7dc] text-black px-6 py-2 rounded-lg font-headline font-semibold text-sm tracking-tight cursor-pointer hover:shadow-[0_0_20px_rgba(125,255,229,0.3)]">
            Resume
        </button>
    </div>
</nav>

<style>
    button {
        transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    }
</style>