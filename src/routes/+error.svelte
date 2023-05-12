<script lang="ts">
    import { page } from '$app/stores';
    import spaceSuit from "../assets/spacesuit.png";
</script>

<section>
    <h1>{$page.status} | {$page.error?.message}</h1>
    <a href="/">Go Home</a>
    <section class="img">
        <img src={spaceSuit} alt="Earth" />
    </section>
</section>
<style>
    section {
        min-height: 100%;
        min-width: 100%;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* background-color: red; */
    }

    h1 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        font-size: clamp(1.75rem, -1.5rem + 8vw, 4rem);
        text-shadow: 0px 3px 0px #000000,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
    }
    a {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        font-size: clamp(0.75rem, -1.1rem + 8vw, 1.2rem);
        margin-top: 20px;
    }

    .img {
        width: 200px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    img {
        width: 200px;
        transform: rotate(160deg) translateY(200px);
    }
</style>