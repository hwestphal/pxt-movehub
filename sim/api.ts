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
     * Wait for some time
     * @param delay time to wait in seconds, eg: 5
     */
    //% weight=10
    //% blockId=mhWait block="wait for %delay seconds"
    export function waitAsync(delay: number) {
        return Promise.delay(delay * 1000);
    }

}
