import type { SvelteComponent } from "svelte";
import type { Axes } from "./Axes";

export class Elypse {
    screenReference : Axes;
    proportion : number;
	private tiltAngle : number = 0;
	private boundElements : { [key: string] : {element : SvelteComponent; speed : number; position : number} } = {};
	private animationId : number | null = null;

    constructor (screenReference : Axes, proportion : number) {
        this.screenReference = screenReference;
        this.proportion = proportion;
		this.updateTiltAngle();
    }

    static factory (screenReference : Axes, proportion : number) : Elypse {
        return new Elypse(screenReference, proportion);
    }

	get majorAxisRadius() : number { return this.screenReference.x * this.proportion / 2; }
	get minorAxisRadius() : number { return (this.screenReference.x > this.screenReference.y) ? this.screenReference.y * this.proportion / 2 : this.screenReference.x * this.proportion / 2; }

	updateTiltAngle() : number { return (Math.acos(this.minorAxisRadius / this.majorAxisRadius) * 180) / Math.PI; }

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