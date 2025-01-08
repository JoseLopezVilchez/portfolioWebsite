<script lang="ts">
    import { onMount } from 'svelte';
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
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
