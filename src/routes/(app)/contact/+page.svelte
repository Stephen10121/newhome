<script lang="ts">
	import ContactCard from '../../../components/ContactCard.svelte';

    
    export let data;
</script>

<section>
    <ContactCard bind:data={data}/>
</section>

<style>
    section {
        min-height: 100%;
        min-width: 100%;
        max-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: red; */
    }
</style>