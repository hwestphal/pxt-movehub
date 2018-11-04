// Auto-generated from simulator. Do not edit.
declare namespace motorAB {
    /**
     * Move forward
     * @param speed speed, eg: 50
     */
    //% weight=9
    //% blockId=mh_ab_forward block="AB: move forward with speed %speed"
    //% speed.min=0 speed.max=100
    //% shim=motorAB::forwardAsync promise
    function forward(speed: number): void;

    /**
     * Move backward
     * @param speed speed, eg: 50
     */
    //% weight=8
    //% blockId=mh_ab_backward block="AB: move backward with speed %speed"
    //% speed.min=0 speed.max=100
    //% shim=motorAB::backwardAsync promise
    function backward(speed: number): void;

    /**
     * Stop
     */
    //% weight=7
    //% blockId=mh_ab_stop block="AB: stop"
    //% shim=motorAB::stopAsync promise
    function stop(): void;

    /**
     * Move forward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=6
    //% blockId=mh_ab_forwardTimed block="AB: move forward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    //% shim=motorAB::forwardTimedAsync promise
    function forwardTimed(speed: number, duration: number): void;

    /**
     * Move backward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=5
    //% blockId=mh_ab_backwardTimed block="AB: move backward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    //% shim=motorAB::backwardTimedAsync promise
    function backwardTimed(speed: number, duration: number): void;

    /**
     * Move forward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=4
    //% blockId=mh_ab_forwardAngled block="AB: move forward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    //% shim=motorAB::forwardAngledAsync promise
    function forwardAngled(speed: number, angle: number): void;

    /**
     * Move backward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=3
    //% blockId=mh_ab_backwardAngled block="AB: move backward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    //% shim=motorAB::backwardAngledAsync promise
    function backwardAngled(speed: number, angle: number): void;

    /**
     * Turn right
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=2
    //% blockId=mh_ab_turnRight block="AB: turn right with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    //% shim=motorAB::turnRightAsync promise
    function turnRight(speed: number, angle: number): void;

    /**
     * Turn left
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=2
    //% blockId=mh_ab_turnLeft block="AB: turn left with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    //% shim=motorAB::turnLeftAsync promise
    function turnLeft(speed: number, angle: number): void;

}
declare namespace motorC {
    /**
     * Move forward
     * @param speed speed, eg: 50
     */
    //% weight=9
    //% blockId=mh_c_forward block="C: move forward with speed %speed"
    //% speed.min=0 speed.max=100
    //% shim=motorC::forwardAsync promise
    function forward(speed: number): void;

    /**
     * Move backward
     * @param speed speed, eg: 50
     */
    //% weight=8
    //% blockId=mh_c_backward block="C: move backward with speed %speed"
    //% speed.min=0 speed.max=100
    //% shim=motorC::backwardAsync promise
    function backward(speed: number): void;

    /**
     * Stop
     */
    //% weight=7
    //% blockId=mh_c_stop block="C: stop"
    //% shim=motorC::stopAsync promise
    function stop(): void;

    /**
     * Move forward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=6
    //% blockId=mh_c_forwardTimed block="C: move forward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    //% shim=motorC::forwardTimedAsync promise
    function forwardTimed(speed: number, duration: number): void;

    /**
     * Move backward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=5
    //% blockId=mh_c_backwardTimed block="C: move backward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    //% shim=motorC::backwardTimedAsync promise
    function backwardTimed(speed: number, duration: number): void;

    /**
     * Move forward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=4
    //% blockId=mh_c_forwardAngled block="C: move forward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    //% shim=motorC::forwardAngledAsync promise
    function forwardAngled(speed: number, angle: number): void;

    /**
     * Move backward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=3
    //% blockId=mh_c_backwardAngled block="C: move backward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    //% shim=motorC::backwardAngledAsync promise
    function backwardAngled(speed: number, angle: number): void;

}
declare namespace motorD {
    /**
     * Move forward
     * @param speed speed, eg: 50
     */
    //% weight=9
    //% blockId=mh_d_forward block="D: move forward with speed %speed"
    //% speed.min=0 speed.max=100
    //% shim=motorD::forwardAsync promise
    function forward(speed: number): void;

    /**
     * Move backward
     * @param speed speed, eg: 50
     */
    //% weight=8
    //% blockId=mh_d_backward block="D: move backward with speed %speed"
    //% speed.min=0 speed.max=100
    //% shim=motorD::backwardAsync promise
    function backward(speed: number): void;

    /**
     * Stop
     */
    //% weight=7
    //% blockId=mh_d_stop block="D: stop"
    //% shim=motorD::stopAsync promise
    function stop(): void;

    /**
     * Move forward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=6
    //% blockId=mh_d_forwardTimed block="D: move forward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    //% shim=motorD::forwardTimedAsync promise
    function forwardTimed(speed: number, duration: number): void;

    /**
     * Move backward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=5
    //% blockId=mh_d_backwardTimed block="D: move backward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    //% shim=motorD::backwardTimedAsync promise
    function backwardTimed(speed: number, duration: number): void;

    /**
     * Move forward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=4
    //% blockId=mh_d_forwardAngled block="D: move forward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    //% shim=motorD::forwardAngledAsync promise
    function forwardAngled(speed: number, angle: number): void;

    /**
     * Move backward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=3
    //% blockId=mh_d_backwardAngled block="D: move backward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    //% shim=motorD::backwardAngledAsync promise
    function backwardAngled(speed: number, angle: number): void;

}
declare namespace colorDistanceC {
    /**
     * Execute when color or distance has changed
     */
    //% weight=9
    //% blockId=mh_c_onColorOrDistanceChanged block="C: when color or distance has changed"
    //% shim=colorDistanceC::onColorOrDistanceChangedAsync promise
    function onColorOrDistanceChanged(handler: (color: Color | undefined, distance: number) => void): void;

    /**
     * Execute when luminosity has changed
     */
    //% weight=8
    //% blockId=mh_c_onLuminosityChanged block="C: when luminosity has changed"
    //% shim=colorDistanceC::onLuminosityChangedAsync promise
    function onLuminosityChanged(handler: (luminosity: number) => void): void;

    /**
     * Set sensor mode
     * @param mode sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_c_cd_mode block="C: luminosity %mode=toggleYesNo"
    //% shim=colorDistanceC::luminosityModeAsync promise
    function luminosityMode(mode: boolean): void;

}
declare namespace colorDistanceD {
    /**
     * Execute when color or distance has changed
     */
    //% weight=9
    //% blockId=mh_d_onColorOrDistanceChanged block="D: when color or distance has changed"
    //% shim=colorDistanceD::onColorOrDistanceChangedAsync promise
    function onColorOrDistanceChanged(handler: (color: Color | undefined, distance: number) => void): void;

    /**
     * Execute when luminosity has changed
     */
    //% weight=8
    //% blockId=mh_d_onLuminosityChanged block="D: when luminosity has changed"
    //% shim=colorDistanceD::onLuminosityChangedAsync promise
    function onLuminosityChanged(handler: (luminosity: number) => void): void;

    /**
     * Set sensor mode
     * @param mode sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_d_cd_mode block="D: luminosity %mode=toggleYesNo"
    //% shim=colorDistanceD::luminosityModeAsync promise
    function luminosityMode(mode: boolean): void;

}
declare namespace tilt {
    /**
     * Execute when tilt has changed (simple mode)
     */
    //% weight=9
    //% blockId=mh_tilt_onChangedSimple block="when tilt has changed"
    //% shim=tilt::onChangedSimpleAsync promise
    function onChangedSimple(handler: (orientation: Orientation) => void): void;

    /**
     * Execute when tilt has changed (precise mode)
     */
    //% weight=8
    //% blockId=mh_tilt_onChangedPrecise block="when tilt has changed"
    //% shim=tilt::onChangedPreciseAsync promise
    function onChangedPrecise(handler: (x: number, y: number, z: number) => void): void;

    /**
     * Set sensor mode
     * @param mode sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_tilt_mode block="precise tilt %mode=toggleYesNo"
    //% shim=tilt::preciseModeAsync promise
    function preciseMode(mode: boolean): void;

}
declare namespace movehub {
    /**
     * Set LED color
     * @param color LED color, eg: Color.Pink
     */
    //% weight=9
    //% blockId=mh_led block="set LED color to %color"
    //% shim=movehub::ledAsync promise
    function led(color: Color): void;

    /**
     * Execute when button is pressed
     */
    //% weight=8
    //% blockId=mh_onButtonPressed block="when button is pressed"
    //% shim=movehub::onButtonPressedAsync promise
    function onButtonPressed(handler: () => void): void;

    /**
     * Execute when button is released
     */
    //% weight=7
    //% blockId=mh_onButtonReleased block="when button is released"
    //% shim=movehub::onButtonReleasedAsync promise
    function onButtonReleased(handler: () => void): void;

    /**
     * Wait for some time
     * @param delay time to wait in seconds, eg: 5
     */
    //% weight=6
    //% blockId=mh_wait block="wait for %delay seconds"
    //% shim=movehub::waitAsync promise
    function wait(delay: number): void;

}
declare namespace rotationAB {
    /**
     * Execute when angle has changed
     */
    //% weight=9
    //% blockId=mh_ab_onAngleChanged block="AB: when angle has changed"
    //% shim=rotationAB::onAngleChangedAsync promise
    function onAngleChanged(handler: (angle: number) => void): void;

    /**
     * Execute when speed has changed
     */
    //% weight=8
    //% blockId=mh_ab_onSpeedChanged block="AB: when speed has changed"
    //% shim=rotationAB::onSpeedChangedAsync promise
    function onSpeedChanged(handler: (speed: number) => void): void;

    /**
     * Set rotation sensor mode
     * @param mode rotation sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_ab_mode block="AB: speed %mode=toggleYesNo"
    //% shim=rotationAB::speedModeAsync promise
    function speedMode(mode: boolean): void;

}
declare namespace rotationC {
    /**
     * Execute when angle has changed
     */
    //% weight=9
    //% blockId=mh_c_onAngleChanged block="C: when angle has changed"
    //% shim=rotationC::onAngleChangedAsync promise
    function onAngleChanged(handler: (angle: number) => void): void;

    /**
     * Execute when speed has changed
     */
    //% weight=8
    //% blockId=mh_c_onSpeedChanged block="C: when speed has changed"
    //% shim=rotationC::onSpeedChangedAsync promise
    function onSpeedChanged(handler: (speed: number) => void): void;

    /**
     * Set rotation sensor mode
     * @param mode rotation sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_c_mode block="C: speed %mode=toggleYesNo"
    //% shim=rotationC::speedModeAsync promise
    function speedMode(mode: boolean): void;

}
declare namespace rotationD {
    /**
     * Execute when angle has changed
     */
    //% weight=9
    //% blockId=mh_d_onAngleChanged block="D: when angle has changed"
    //% shim=rotationD::onAngleChangedAsync promise
    function onAngleChanged(handler: (angle: number) => void): void;

    /**
     * Execute when speed has changed
     */
    //% weight=8
    //% blockId=mh_d_onSpeedChanged block="D: when speed has changed"
    //% shim=rotationD::onSpeedChangedAsync promise
    function onSpeedChanged(handler: (speed: number) => void): void;

    /**
     * Set rotation sensor mode
     * @param mode rotation sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_d_mode block="D: speed %mode=toggleYesNo"
    //% shim=rotationD::speedModeAsync promise
    function speedMode(mode: boolean): void;

}

// Auto-generated. Do not edit. Really.
