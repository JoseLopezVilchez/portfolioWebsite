<script lang="ts">
    import { elypses, screenDimensions } from "$lib/stores/global";
    import { Elypse } from "$lib/utils/Elypse";
    import { onMount } from "svelte";

    let { identifier = '', children } = $props();

    let localElypse : Elypse;

    $: {
        localElypse = Elypse.factory($screenDimensions, 2/3);
    }
    

    onMount(() => {
        if (identifier != null && identifier != '') {
            elypses.set();
        }
    });

</script>



<style>

</style>