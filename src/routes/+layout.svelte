<script lang="ts">
    import { onMount } from 'svelte';
	import '../app.css';
    import { screenDimensions } from '$lib/stores/global';
    import { Footer, FooterIcon } from 'flowbite-svelte';
	import { GithubSolid, DiscordSolid, TwitterSolid, LinkedinSolid } from 'flowbite-svelte-icons';
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

{@render children()}

<Footer class="flex justify-center self-center h-max p-2 bg-black">
	<FooterIcon href="/">
		<DiscordSolid class="w-8 h-8 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
	</FooterIcon>
	<FooterIcon href="/">
		<GithubSolid class="w-8 h-8 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
	</FooterIcon>
	<FooterIcon href="/">
		<LinkedinSolid class="w-8 h-8 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
	</FooterIcon>
</Footer>