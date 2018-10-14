// Auto-generated from simulator. Do not edit.
declare namespace movehub {
    /**
     * Set LED color
     * @param color LED color, eg: Color.Pink
     */
    //% weight=90
    //% blockId=mhLed block="set LED color to %color"
    //% shim=movehub::ledAsync promise
    function led(color: Color): void;

    /**
     * Execute when button is pressed
     */
    //% weight=81
    //% blockId=mhOnButtonPressed block="when button is pressed"
    //% shim=movehub::onButtonPressedAsync promise
    function onButtonPressed(handler: () => void): void;

    /**
     * Execute when button is released
     */
    //% weight=80
    //% blockId=mhOnButtonReleased block="when button is released"
    //% shim=movehub::onButtonReleasedAsync promise
    function onButtonReleased(handler: () => void): void;

    /**
     * Wait for some time
     * @param delay time to wait in seconds, eg: 5
     */
    //% weight=10
    //% blockId=mhWait block="wait for %delay seconds"
    //% shim=movehub::waitAsync promise
    function wait(delay: number): void;

}

// Auto-generated. Do not edit. Really.
