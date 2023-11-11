<script lang="ts">
    export let projectImage: string;
    export let name: string;
    export let link: string;
    export let description: string;
    export let tags: string[] = [];
    export let repo = true;
</script>

<div class="project">
    <img src={projectImage} alt="{name} Example" />
    <div class="info">
        <button class="buton">{name}</button>
        <div class="overflow">
            <div class="description2">
                <p>{description}</p>
                <a href={link} title={repo ? "Github" : "Visit Site"} target="_blank">{repo ? "Visit Repository" : "Visit site"}</a>
            </div>
            <div class="stack2">
                {#if tags.length}
                    {#each tags as tag}
                        <div class="chip2">{tag}</div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .project {
        background-color: #ffffff;
        color: #000000;
        border-radius: 10px;
        overflow: hidden;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .overflow {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #0000009d;
        width: 100%;
        gap: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: calc(100% - 77px);
        padding: 20px;
        --opacity-set-level: 0;
        opacity: var(--opacity-set-level);
        transition: opacity 0.15s linear;
    }

    img {
        max-height: calc(100% - 77px);
        max-width: 100%;
        background-color: #ffffff;
    }

    .info {
        padding: 20px 20px 25px 20px;
        display: flex;
        height: 77px;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .description2 {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    
    .description2 p,
    .description2 a {
        font-family: sans-serif;
        color: #ffffff;
        text-align: center;
    }

    .buton {
        font-family: "Roboto Mono", monospace;
        color: #000000;
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: underline;
        border: none;
        background: none;
        cursor: pointer;
    }

    .buton:focus + .overflow,
    .overflow:hover {
        --opacity-set-level: 1;
    }

    .stack2 {
        display: flex;
        gap: 10px;
    }


    .chip2 {
        font-family: sans-serif;
        color: #ffffff;
        font-weight: 600;
        border: 2px solid #ffffff;
        padding: 5px;
        border-radius: 5px;
    }
</style>