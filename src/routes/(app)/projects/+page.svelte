<script lang="ts">
	import { onDestroy } from "svelte";
    import authImage from "../../../assets/dashboardauth.png";
    import filesImage from "../../../assets/filespicture.png";
    import fenceImage from "../../../assets/fencecompany.png";
	import { showContactStore } from "../../../function/store";
	import ContactCard from "../../../components/ContactCard.svelte";
	import ProjectTile from "../../../components/ProjectTile.svelte";
	import Footer from "../../../components/Footer.svelte";

    let showContact = false;
    const showContactStoreUnsubscribe = showContactStore.subscribe((value) => showContact = value);
    export let data;

    onDestroy(() => {
        showContactStoreUnsubscribe();
    });
</script>
{#if showContact}
    <ContactCard on:close={() => showContactStore.set(false)} bind:data={data}/>
{/if}

<section>
    <h1>Projects</h1>
</section>
<section>
    <ProjectTile
        projectImage={authImage}
        name="GruzAuth"
        link="https://auth.gruzservices.com"
        description="Authentication service that takes the load away from developers."
        tags={["Svelte", "TypeScript", "Socket.io", "TypeORM"]}
    />
</section>
<section>
    <ProjectTile
        projectImage={filesImage}
        name="GCloud"
        link="https://files.gruzservices.com"
        description="Google drive knockoff."
        tags={["Svelte", "JavaScript", "Axios", "Express"]}
    />
</section>
<section>
    <ProjectTile
        projectImage={fenceImage}
        name="Local Fence Co"
        link="https://thelocalfenceco.com"
        description="Contract Job. Fence company website."
        tags={["SvelteKit", "TypeScript", "Prisma", "Sqlite"]}
    />
</section>
<!-- <SectionIntro /> -->
<!-- <SectionIntro /> -->
<Footer top="400%"/>
<!-- <section>
    <img src={image} alt="Cool logo" />
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <a href="/projects">Projects</a>
</section> -->

<style>
    section {
        min-height: 100%;
        min-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 10px;
        /* background-color: red; */
    }

    h1 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        font-size: clamp(1.5rem, -1.5rem + 8vw, 4rem);
    }
</style>