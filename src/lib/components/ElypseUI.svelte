<script lang="ts">
    import { elypses } from "$lib/stores/global";
    import { Elypse } from "$lib/utils/Elypse";
    import { onMount, setContext } from "svelte";

    let { identifier = '', proportion, children } = $props();

    setContext('identifier', identifier);

    onMount(() => { // when this component is created...
        if (identifier != null && identifier != '' && typeof proportion === 'number') { // ... and everything is in order ...
            elypses.update(currentElypses => { // ... it creates a new elypse instance in global list ...

                const newElypse = Elypse.factory(proportion); // ... using props passed to it
                newElypse.animate();

                return {
                    ...currentElypses,
                    identifier : newElypse
                };
            });
        }

        return () => { // removes associated elypse instance from store when this component is destroyed
            elypses.update(currentElypses => {
                if (identifier in currentElypses) {
                    currentElypses[identifier].stopAnimation();
                    delete currentElypses[identifier];
                    return { ...currentElypses};
                }

                return currentElypses;
            });
        };
    });

</script>

<div style="transform: rotateX({$elypses[identifier].tilt}deg);">
    {@render children()}
</div>

<style>
    
</style>