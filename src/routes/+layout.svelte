<script lang="ts">
    import { onMount } from 'svelte';
	import '../app.css';
    import { screenDimensions } from '$lib/stores/global';
	let { children } = $props();

	onMount(() => {
		
		const updateScreen = () => {
			screenDimensions.update(dimensions => { return { x : window.innerWidth, y : window.innerHeight}}); // .update() allows access to writables
		};
		updateScreen(); // gets dimensions for the first time
		window.addEventListener("resize", updateScreen); // listener updates stored screen size value on window resize

		return () => { // listener removal
			window.removeEventListener("resize", updateScreen);
		};
	});

</script>



<style>

</style>

{@render children()}
