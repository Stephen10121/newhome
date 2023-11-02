<script lang="ts">
	import { onMount } from "svelte";

    export let textArray: string[];
    let i = 0
    // $: chosen = textArray[i];
    let chosen = textArray[i];
    let removed = false;

    function removeText() {
        setTimeout(() => {
            chosen =  chosen.slice(0, -1);
            if (chosen.length>0) {
                removeText();
            } else {
                removed = true;
            }
        }, 20);
    }
    let j=0;
    function addText() {
        setTimeout(() => {
            chosen = textArray[i].substring(0,j);
            if (j<textArray[i].length) {
                j++;
                addText();
            } else {
                removed = false;
            }
        }, 40);
    }

    $: {
        if (removed) {
            j=0;
            addText();
        }
    }

    onMount(() => {
        setInterval(() => {
            i = i < textArray.length-1 ? i+1 : 0;
            removeText();
        }, 4000);
    });
</script>

<span>{chosen}</span>