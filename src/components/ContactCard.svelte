<script lang="ts">
    import { fade } from 'svelte/transition';
	import { newSchema } from "../function/contactPageSchema";
    import { superForm } from "sveltekit-superforms/client";
    import { ConfettiExplosion } from 'svelte-confetti-explosion';

    export let data;
    let submitted = 0;

    $: {
        if (submitted) {
            setTimeout(() => {
                submitted = 0;
            }, 6000);
        }
    }

    const { form, errors, enhance } = superForm(data.form, {
        validators: newSchema,
        onSubmit() {
            submitted = 1;
        },
        onUpdate(event) {
            if (!event.form.valid) return
            submitted = submitted+1;
        },
    });
</script>

<form method="POST" use:enhance transition:fade={{ duration: 150 }}>
    {#if submitted === 2}
        <div>
            <ConfettiExplosion />
        </div>
    {/if}
    <h1>Give Me A Holler</h1>
    <label>
        {#if $errors.name}
            <p class="errorP">{$errors.name}</p>
        {/if}
        <input name="name" type="text" placeholder="Name" bind:value={$form.name} />
    </label>
    <label>
        {#if $errors.contactMethod}
            <p class="errorP">{$errors.contactMethod}</p>
        {/if}
        <input name="contactMethod" type="email" placeholder="Email" bind:value={$form.contactMethod}/>
    </label>
    <label>
        {#if $errors.aboutContact}
            <p class="errorP">{$errors.aboutContact}</p>
        {/if}
        <textarea name="aboutContact" id="description" placeholder="Description" bind:value={$form.aboutContact}></textarea>
    </label>
    <button title="Submit Form" class="submit">Submit</button>
</form>

<style>

    div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    form {
        width: 100%;
        max-width: 700px;
        height: 100%;
        position: relative;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 10px;
        gap: 10px;
    }

    form h1 {
        font-family: "Poppins", sans-serif;
        color: #ffffff;
        font-weight: 600;
        margin-bottom: 20px;
        font-size: 2rem;
    }

    .errorP {
        font-family: "Poppins", sans-serif;
        color: #fcacac;
        font-weight: 600;
        font-size: 0.9rem;
    }

    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    input,
    textarea {
        width: 100%;
        font-family: "Poppins", sans-serif;
        color: #ffffff;
        font-weight: 500;
        padding: 10px 5px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border: none;
        border-bottom: 5px solid #dfdfdf;
        /* border-radius: 5px; */
        background-color: #61616193;
    }

    input:focus,
    textarea:focus {
        outline: 1px solid #000000;
    }

    .submit {
        width: 100%;
        font-family: "Poppins", sans-serif !important;
        color: #ffffff;
        font-weight: 600;
        padding: 10px 5px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: 2px solid #ffffff;
        background: none;
        /* border-radius: 5px; */
        cursor: pointer;
    }

    textarea {
        min-width: 100%;
        max-width: 100%;
        height: 120px;
        min-height: 40px;
        resize: vertical;
    }

    textarea::-webkit-resizer {
        width: 30px !important;
        height: 30px !important;
    }
</style>