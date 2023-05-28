<script lang="ts">
    export let when: string;
    export let name: string;
    export let about: string;
    export let email: string;
</script>

<div>
    <h1><span class="title">From</span>: {name}</h1>        
    <h1><span class="title">Email</span>: <span><a href={`mailto:${email}`}>{email}</a></span></h1>        
    <h1><span class="title">About</span>: {about}</h1>       
    <p class="time">{when}</p> 
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
        font-family: "Poppins", sans-serif;
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    .title {
        font-weight: 600;
    }
</style>