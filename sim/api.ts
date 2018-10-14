/// <reference types="../libs/core/enums" />

namespace pxsim.movehub {
    /**
     * Set LED color
     * @param color LED color, eg: Color.Pink
     */
    //% weight=90
    //% blockId=mhLed block="set LED color to %color"
    export async function ledAsync(color: Color) {
        await moveHub().led(color);
    }

    /**
     * Execute when button is pressed
     */
    //% weight=81
    //% blockId=mhOnButtonPressed block="when button is pressed"
    export async function onButtonPressedAsync(handler: RefAction) {
        await moveHub().subscribeButton("pressed", () => runtime.runFiberAsync(handler));
    }

    /**
     * Execute when button is released
     */
    //% weight=80
    //% blockId=mhOnButtonReleased block="when button is released"
    export async function onButtonReleasedAsync(handler: RefAction) {
        await moveHub().subscribeButton("released", () => runtime.runFiberAsync(handler));
    }

    /**
     * Execute when tilt has changed (simple mode)
     */
    //% weight=73
    //% blockId=mhOnTiltChangedSimple block="when tilt has changed"
    export async function onTiltChangedSimpleAsync(handler: (orientation: Orientation) => void) {
        await moveHub().subscribeTilt("simple", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Execute when tilt has changed (precise mode)
     */
    //% weight=72
    //% blockId=mhOnTiltChangedPrecise block="when tilt has changed"
    export async function onTiltChangedPreciseAsync(handler: (x: number, y: number, z: number) => void) {
        await moveHub().subscribeTilt("precise", (value) => runtime.runFiberAsync(handler as any, value.x, value.y, value.z));
    }

    /**
     * Set tilt mode
     * @param mode tilt mode, eg: TiltMode.Precise
     */
    //% weight=71
    //% blockId=mhTiltMode block="set tilt mode to %mode"
    export async function tiltModeAsync(mode: TiltMode) {
        await moveHub().setTiltPreciseMode(!!mode);
    }

    /**
     * Wait for some time
     * @param delay time to wait in seconds, eg: 5
     */
    //% weight=10
    //% blockId=mhWait block="wait for %delay seconds"
    export function waitAsync(delay: number) {
        return Promise.delay(delay * 1000);
    }

}

namespace pxsim {
    export function log(msg: string) {
        console.log(`%c${new Date().toISOString()}`, "color:blue; font-style: italic", msg);
    }
}
