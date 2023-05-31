<script lang="ts">
	import Notification from '../../../components/Notification.svelte';
    import RequestTile from '../../../components/RequestTile.svelte';

    export let data;
    export let form;
</script>

<section>
    {#if form?.message}
        <Notification text={form.message} />
    {/if}
    {#if data.requests.length}
        {#each data.requests.reverse() as request}
            <RequestTile email={request.email} name={request.name} about={request.about} when={request.time} id={request.id} />
        {/each}
    {:else}
        <p class="empty">No Requests</p>
    {/if}
</section>

<style>
    section {
        padding: 20px;
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    .empty {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "Roboto Mono", monospace;
        font-size: 2rem;
        color: #c7c7c7;
        user-select: none;
    }
</style>