<script lang="ts">
    import { elypses, screenDimensions } from "$lib/stores/global";
    import { Elypse } from "$lib/utils/Elypse";
    import { onMount } from "svelte";

    let { identifier = '', proportion, children } = $props();

    onMount(() => { // when this component is created...
        if (identifier != null && identifier != '' && typeof proportion === 'number') { // ... and everything is in order ...
            elypses.update(currentElypses => { // ... it creates a new elypse instance in global list ...
                return {
                    ...currentElypses,
                    identifier : Elypse.factory(proportion) // ... using props passed to it
                };
            });
        }
    });

</script>



<style>

</style>