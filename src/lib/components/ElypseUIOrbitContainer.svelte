<script lang="ts">
    import { elypses } from "$lib/stores/global";
    import { getContext } from "svelte";
    let { key, speed, children } = $props();

    let x : number = 0;
    let y : number = 0;

    export function updatePosition(newX : number, newY : number) {
        x = newX;
        y = newY;
    }

    let identifier : string = getContext('identifier');
    const self = this; //TODO find out how tf you can get instance references

    elypses.update(currentElypses => {
        if (key != '' && speed >= 0) {
            currentElypses[identifier].bindElement(key, self, speed);
        }        
    });

</script>



<style>

</style>