<script lang="ts">
	import { onMount } from "svelte";

    let canvas: HTMLCanvasElement | undefined = $state();

    onMount(() => {
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const setCanvasSize = () => {
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize)

        // Create stars
        const stars: Array<{ x: number; y: number; radius: number; opacity: number; speed: number }> = []
        const starCount = 200

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                opacity: Math.random(),
                speed: Math.random() * 0.5 + 0.2,
            })
        }

        // Animation
        let animationFrameId: number
        const animate = () => {
            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            stars.forEach((star) => {
                // Twinkle effect
                star.opacity += star.speed * 0.02
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.speed *= -1
                }

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener("resize", setCanvasSize)
            cancelAnimationFrame(animationFrameId)
        }
    });
</script>

<canvas bind:this={canvas} class="fixed inset-0 pointer-events-none" aria-hidden="true"></canvas>
