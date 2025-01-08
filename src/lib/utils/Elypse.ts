import type { SvelteComponent } from "svelte";
import type { Axes } from "./Axes";
import { screenDimensions } from "$lib/stores/global";

export class Elypse {
    screenReference : Axes = {x : 0, y : 0};
    proportion : number;
	private tiltAngle : number = 0;
	private boundElements : { [key: string] : {element : SvelteComponent; speed : number; position : number} } = {};
	private animationId : number | null = null;

    constructor (proportion : number) {
        this.proportion = proportion;

        screenDimensions.subscribe(screen => { //subscribes to global and updates two attributes based off it
            this.screenReference = screen;
            this.updateTiltAngle();
        });

		this.updateTiltAngle();
    }

    static factory (proportion : number) : Elypse {
        return new Elypse(proportion);
    }

	get majorAxisRadius() : number { return this.screenReference.x * this.proportion / 2; }
	get minorAxisRadius() : number { return (this.screenReference.x > this.screenReference.y) ? this.screenReference.y * this.proportion / 2 : this.screenReference.x * this.proportion / 2; }

	updateTiltAngle() { this.tiltAngle = Math.acos(this.minorAxisRadius / this.majorAxisRadius) * 180 / Math.PI; }

	bindElement (newKey : string, newElement : SvelteComponent , newSpeed : number) {
		this.boundElements[newKey] = {
			element : newElement,
			speed : newSpeed,
			position : 0
		};
	}

	unbindElement (key : string) {
		delete this.boundElements[key];
	}

	modifyElementSpeed (key : string, newSpeed : number) {
		this.boundElements[key].speed = newSpeed;
	}

	animate() {
        const positionCalculation = () => {
            for (const key in this.boundElements) {
                if (this.boundElements.hasOwnProperty(key)) {
                    const elementData = this.boundElements[key];

                    elementData.position += elementData.speed / 100;
                    if (elementData.position >= Math.PI * 2) elementData.position = 0; // resets angle every loop

                    // passes data to svelte component
                    elementData.element.$set({ //TODO - DEPRECATED, FIND ALTERNATIVE
                        x : this.majorAxisRadius * Math.cos(elementData.position),
                        y : this.minorAxisRadius * Math.sin(elementData.position)
                    });
                }
            }

            // continues animation (or not, if stopAnimation has been triggered)
            if (this.animationId !== null) {
                this.animationId = requestAnimationFrame(positionCalculation);
            }
        };

        // triggers animation
        if (this.animationId === null) {
            this.animationId = requestAnimationFrame(positionCalculation);
        }
    }

	stopAnimation() {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}