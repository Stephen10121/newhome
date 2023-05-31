<script lang="ts">
    export let when: string;
    export let name: string;
    export let about: string;
    export let email: string;
    export let id: number;

    import { enhance } from '$app/forms';
</script>

<div>
    <h1><span class="title">From</span>: {name}</h1>        
    <h1><span class="title">Email</span>: <span><a href={`mailto:${email}`}>{email}</a></span></h1>        
    <h1><span class="title">About</span>: {about}</h1>       
    <p class="time">{when}</p> 
    <form method="post" action="?/delete" use:enhance>
        <input type="hidden" name="id" value={id} />
        <button class="deleteButton" title="Delete Post">Delete</button>
    </form>
</div>

<style>
    div {
        background-color: #dfdfdf;
        width: 100%;
        height: 200px;
        border-radius: 10px;
        display: flex;
        align-items: flex-start ;
        justify-content: flex-start;
        flex-direction: column;
        position: relative;
        padding: 30px 10px 10px 10px;
    }

    .time {
        position: absolute;
        top: 5px;
        right: 10px;
        font-family: sans-serif;
    }

    h1 {
        font-family: sans-serif;
        font-weight: 500;
    }

    .title {
        font-weight: 600;
    }

    .deleteButton {
        position: absolute;
        bottom: 5px;
        right: 5px;
        border: 2px solid red;
        font-family: sans-serif;
        font-size: 1rem;
        color: red;
        font-weight: bold;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
    }
</style>