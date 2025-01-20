<script lang="ts">
    import { onMount } from 'svelte';
	import '../app.css';
    import { screenDimensions } from '$lib/stores/global';
    import { Footer, FooterIcon } from 'flowbite-svelte';
	import { GithubSolid, DiscordSolid, TwitterSolid, LinkedinSolid } from 'flowbite-svelte-icons';
    import ElypseUi from '$lib/components/ElypseUI.svelte';
	let { children } = $props();

	let proportion = 2/3;

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

<div class="backgroundGradient fixed inset-0"> <!-- Background, fixed in place -->

	<!--
	<div> 
		<ElypseUi proportion={proportion} identifier="unica">
			<div class="rounded-full elypseGradient"></div>
		</ElypseUi>
	</div>
	-->

	<div class="h-screen overflow-y-auto"> <!-- The contents can scroll freely thx to this div's classes -->

		{@render children()} <!-- +page.svelte components are rendered here -->

		<Footer class="flex justify-center self-center h-max p-2 bg-black"> <!-- Social media links -->
			<FooterIcon href="https://discord.com/users/209326831935946752" target="_blank">
				<DiscordSolid class="w-12 h-12 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
			</FooterIcon>
			<FooterIcon href="https://github.com/JoseLopezVilchez" target="_blank">
				<GithubSolid class="w-12 h-12 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
			</FooterIcon>
			<FooterIcon href="https://www.linkedin.com/in/jos%C3%A9-l%C3%B3pez-v%C3%ADlchez-44a0692b3/" target="_blank">
				<LinkedinSolid class="w-12 h-12 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
			</FooterIcon>
		</Footer>

	</div>
</div>

<style>
	.backgroundGradient {
		background: radial-gradient(circle,
		rgba(14, 0, 14, 1) 0%,
		rgba(14, 0, 14, 1) 1%, /*Solid dot*/
		rgb(61, 27, 65) 2%,
		rgb(77, 32, 82) 3%, /*Ring*/
		rgb(0, 0, 0) 4%,
		rgb(42, 27, 65) 5%,
		rgb(15, 1, 20) 25%, /*Soft fade*/
		rgb(0, 0, 0) 40%
		);
	}

	/*.elypseGradient {
		background: radial-gradient(circle,
			rgba(255, 0, 0, 1) 20%,
			rgba(255, 255, 0, 0.7) 50%,
			rgba(0, 0, 255, 0) 80%
		);
	}*/
</style>