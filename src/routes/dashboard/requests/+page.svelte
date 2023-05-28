<script lang="ts">
	import RequestTile from '../../../components/RequestTile.svelte';

    export let data;
</script>

<section>
    {#if data.requests.length}
        {#each data.requests.reverse() as request}
            <RequestTile email={request.email} name={request.name} about={request.about} when={request.when}/>
        {/each}
    {/if}
</section>

<style>
    section {
        padding: 20px;
    }
</style>