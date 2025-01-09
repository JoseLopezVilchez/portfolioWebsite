<script lang="ts">
    import { elypses, screenDimensions } from "$lib/stores/global";
    import { Elypse } from "$lib/utils/Elypse";
    import { onDestroy, onMount } from "svelte";

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

    onDestroy (() => { // removes associated elypse instance from store when this component is destroyed
        elypses.update(currentElypses => {
            if (identifier in currentElypses) {
                delete currentElypses[identifier];
                return { ...currentElypses};
            }

            return currentElypses;
        });
    });

</script>

<div>
    {children}
</div>

<style>

</style>