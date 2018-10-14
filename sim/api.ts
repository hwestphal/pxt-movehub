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
     * Wait for some time
     * @param delay time to wait in seconds, eg: 5
     */
    //% weight=10
    //% blockId=mhWait block="wait for %delay seconds"
    export function waitAsync(delay: number) {
        return Promise.delay(delay * 1000);
    }

}
