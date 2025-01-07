<script lang="ts">
// ---------------------------------
import '../app.css';
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
import { onMount } from "svelte";
let { children } = $props();

// ------------------------------------------------ //
// Screen size object for later elypse calculations //
// ------------------------------------------------ //

type Axes = {
	x : number; //horizontal axis
	y : number; //vertical axis
};

let screen : Axes = {
	x : 0,
	y : 0
};

const updateScreen = (screen : Axes) => {
	screen.x = window.innerWidth;
	screen.y = window.innerHeight;
};

// -------------------------------- //
// Elypse definition & calculations //
// -------------------------------- //

class Elypse {
    screenReference : Axes;
    proportion : number;
	tiltAngle : number = 0;
	boundElements: { element: HTMLElement; position: Axes }[] = [];

    constructor (screenReference : Axes, proportion : number) {
        this.screenReference = screenReference;
        this.proportion = proportion;
		this.updateTiltAngle();
    }

    static factory (screenReference : Axes, proportion : number) : Elypse {
        return new Elypse(screenReference, proportion);
    }

	get majorAxisRadius() : number { return Math.max(this.screenReference.x, this.screenReference.y) * this.proportion / 2; }
	get minorAxisRadius() : number { return Math.min(this.screenReference.x, this.screenReference.y) * this.proportion / 2; }

	updateTiltAngle() : number {
		this.tiltAngle = (Math.acos(Math.min(this.screenReference.x , this.screenReference.y) / Math.max(this.screenReference.x , this.screenReference.y)) * 180) / Math.PI;
		return this.tiltAngle;
	}

	

}

let elypses : { [key: string]: Elypse } = { // preferred key-value storage for easier identification
	"first" : Elypse.factory(screen, 2/3),
	"second" : Elypse.factory(screen, 2/3)
};

onMount(() => {
	updateScreen(screen); // gets dimensions for the first time

	const updateScreenSize = () => updateScreen(screen); // storing reference for listener deletion

	window.addEventListener("resize", updateScreenSize);

	return () => window.removeEventListener("resize", updateScreenSize);
});

// ----------------------------------



// ----------------------------------


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
