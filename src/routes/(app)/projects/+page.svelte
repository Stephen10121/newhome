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
<section class="merg">
    <ProjectTile
        projectImage={authImage}
        name="GruzAuth"
        link="https://github.com/Stephen10121/authserverv3"
        description="Authentication service that takes the load away from developers."
        tags={["Svelte", "TypeScript", "Socket.io", "TypeORM"]}
    />
</section>
<section class="merg">
    <ProjectTile
        projectImage={filesImage}
        name="GCloud"
        link="https://github.com/Stephen10121/FileStruct"
        description="Google drive knockoff."
        tags={["Svelte", "JavaScript", "Axios", "Express"]}
    />
</section>
<section class="merg btom">
    <ProjectTile
        projectImage={fenceImage}
        name="Local Fence Co"
        repo={false}
        link="https://thelocalfenceco.com"
        description="Contract Job. Fence company website."
        tags={["SvelteKit", "TypeScript", "Prisma", "Sqlite"]}
    />
</section>
<!-- <SectionIntro /> -->
<!-- <SectionIntro /> -->
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

    .merg {
        margin-top: 300px;
    }
    
    .btom {
        margin-bottom: 100px;
    }

    h1 {
        font-family: 'Roboto Mono', monospace;
        color: #F4FDFF;
        font-weight: 600;
        font-size: clamp(1.5rem, -1.5rem + 8vw, 4rem);
    }
</style>