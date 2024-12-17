<script lang="ts">
// ---------------------------------
import '../app.css';
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
let { children } = $props();

// ------------------------------------------------------------------------- //
// Lógica de toma de tamaño de pantalla para posteriores cálculos de elipses //
// ------------------------------------------------------------------------- //
import { onMount } from "svelte";

type Ejes = {
	ancho: number;
	alto: number;
};

let pantalla : Ejes = {
	ancho: 0,
	alto: 0
};

const actualizaTamanyo = (pantalla : Ejes) => { // clojure que actualiza width y height con las dimensiones de pantalla
	pantalla.ancho = window.innerWidth;
	pantalla.ancho = window.innerHeight;
};

let elipse1 : Ejes = {
	ancho: 0,
	alto: 0
}

let elipse2 : Ejes = {
	ancho: 0,
	alto: 0
}

const actualizaElipsis = (elipsis : Ejes) => {

}

onMount(() => {
	actualizaTamanyo(pantalla); // Toma las dimensiones por primera vez

	const clojureTamanyo = () => actualizaTamanyo(pantalla);
	window.addEventListener("resize", clojureTamanyo); //Escucha cambios de tamaño

	const clojureElipse1 = () => actualizaElipsis(elipse1);
	const clojureElipse2 = () => actualizaElipsis(elipse2);

	return () => {
		window.removeEventListener("resize", clojureTamanyo); // Limpia el listener al destruir
	};
});

// ----------------------------------

let elipsisMenor = [];
let elipsisMayor = [];



// ----------------------------------
let estrellaMenor = [];
let estrellaMayor = [];

</script>


<div class="absolute -z-10 w-screen h-screen gradiente-base">
	<div class="z-0 rounded-full estrella-menor bg-red-400 absolute"></div>
	<div class="z-0 rounded-full estrella-mayor bg-red-400 absolute"></div>

	<div class="z-0 rounded-full estrella-media bg-amber-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
	<div class="z-10 rounded-full anillo bg-slate-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

	
</div>


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

	.gradiente-base {
		background-image: radial-gradient(#4E2552, #0E000E);
	}

	.estrella-menor {

	}

	.estrella-media {
		
	}

	.estrella-mayor {
		
	}

	.anillo {
		
	}

</style>

{@render children()}
