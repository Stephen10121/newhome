<script lang="ts">
    export let title: string;
    export let src: string;
    export let golang = false;
    export let link: string;
</script>

<a href={link} target="_blank">
    <img class="lang-icon" src={src} alt={title} />
    <p>{title}</p>
    {#if golang}
        <div class="golang" />
    {/if}
</a>

<style>
    a {
        padding: 40px 50px 20px 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        position: relative;
        isolation: isolate;
        background: rgb(0,0,0);
        background: radial-gradient(circle, rgba(0,0,0,1) 33%, rgba(255,255,255,0) 68%, rgba(255,255,255,0) 100%);
        text-decoration: none;
    }

    .lang-icon {
        width: 100px;
        height: 100px;
    }

    p {
        font-family: 'Roboto Mono', monospace;
        color: #ffffff;
        font-weight: 600;
        font-size: 1.25rem;
    }

    .golang {
        position: absolute;
        width: 53px;
        height: 30px;
        background-color: #ffffff;
        top: 52px;
        left: 81px;
        z-index: -1;
    }
</style>