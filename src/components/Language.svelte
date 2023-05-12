<script lang="ts">
    export let title: string;
    export let src: string;
</script>

<section>
    <img src={src} alt={title} />
    <p>{title}</p>
</section>

<style>
    section {
        background-color: #dfdfdf;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }

    img {
        width: 170px;
        height: 170px;
    }

    p {
        font-family: 'Roboto Mono', monospace;
        color: #000000;
        font-weight: 600;
        font-size: 1.25rem;
    }
</style>