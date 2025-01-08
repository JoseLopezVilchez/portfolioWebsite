<script lang="ts">
    import { onMount } from 'svelte';
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import type { Axes } from '$lib/utils/Axes';
    import { elypses } from '$lib/stores/global';
	let { children } = $props();

	const updateScreen = (screen : Axes) => {
		screen.x = window.innerWidth;
		screen.y = window.innerHeight;
	};

	onMount(() => {
		updateScreen(screenDimensions); // gets dimensions for the first time

		const updateScreenSize = () => updateScreen(screenDimensions);
		window.addEventListener("resize", updateScreenSize); // listener updates stored screen size value on window resize

		const updateElypses = () => { // modifies tilt angle of all elypses to take into account new screen size value
			elypses.update(currentElypses => { // .update() allows access to current state for modification
				Object.entries(currentElypses).forEach(([key, value]) => {
					value.updateTiltAngle();
				});
			
				return currentElypses; // returns modified object
			});
		};
		window.addEventListener("resize", updateElypses);

		return () => { // listener removal
			window.removeEventListener("resize", updateScreenSize);
			window.removeEventListener("resize", updateElypses);
		}
	});

</script>

<Navbar>
	<NavBrand href="/">
	  <img src="https://pixelz.cc/wp-content/uploads/2018/08/stock-market-electronic-chart-bullish-uhd-4k-wallpaper.jpg" class="me-3 h-6 sm:h-9" alt="Logo"/>
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Inicio</span>
	</NavBrand>
	<NavHamburger></NavHamburger>
	<NavUl>
	  <NavLi href="/demos">Demostraciones</NavLi>
	  <NavLi href="/repos">Repositorios</NavLi>
	  <NavLi href="">Blog</NavLi>
	  <NavLi href="/contact">Contacto</NavLi>
	</NavUl>
</Navbar>

<style>

</style>

{@render children()}
