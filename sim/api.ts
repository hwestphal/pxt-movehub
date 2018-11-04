/// <reference types="../libs/core/enums" />

namespace pxsim.motorAB {
    /**
     * Move forward
     * @param speed speed, eg: 50
     */
    //% weight=9
    //% blockId=mh_ab_forward block="AB: move forward with speed %speed"
    //% speed.min=0 speed.max=100
    export async function forwardAsync(speed: number) {
        await moveHub().motorAB.constant(speed);
    }

    /**
     * Move backward
     * @param speed speed, eg: 50
     */
    //% weight=8
    //% blockId=mh_ab_backward block="AB: move backward with speed %speed"
    //% speed.min=0 speed.max=100
    export async function backwardAsync(speed: number) {
        await moveHub().motorAB.constant(-speed);
    }

    /**
     * Stop
     */
    //% weight=7
    //% blockId=mh_ab_stop block="AB: stop"
    export async function stopAsync() {
        await moveHub().motorAB.stop();
    }

    /**
     * Move forward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=6
    //% blockId=mh_ab_forwardTimed block="AB: move forward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    export async function forwardTimedAsync(speed: number, duration: number) {
        await moveHub().motorAB.timedAndWait(duration * 1000, speed);
    }

    /**
     * Move backward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=5
    //% blockId=mh_ab_backwardTimed block="AB: move backward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    export async function backwardTimedAsync(speed: number, duration: number) {
        await moveHub().motorAB.timedAndWait(duration * 1000, -speed);
    }

    /**
     * Move forward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=4
    //% blockId=mh_ab_forwardAngled block="AB: move forward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    export async function forwardAngledAsync(speed: number, angle: number) {
        await moveHub().motorAB.angledAndWait(angle, speed);
    }

    /**
     * Move backward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=3
    //% blockId=mh_ab_backwardAngled block="AB: move backward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    export async function backwardAngledAsync(speed: number, angle: number) {
        await moveHub().motorAB.angledAndWait(angle, -speed);
    }

    /**
     * Turn right
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=2
    //% blockId=mh_ab_turnRight block="AB: turn right with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    export async function turnRightAsync(speed: number, angle: number) {
        await moveHub().motorAB.angledAndWait(angle, speed, -speed);
    }

    /**
     * Turn left
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=2
    //% blockId=mh_ab_turnLeft block="AB: turn left with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    export async function turnLeftAsync(speed: number, angle: number) {
        await moveHub().motorAB.angledAndWait(angle, -speed, speed);
    }
}

namespace pxsim.motorC {
    /**
     * Move forward
     * @param speed speed, eg: 50
     */
    //% weight=9
    //% blockId=mh_c_forward block="C: move forward with speed %speed"
    //% speed.min=0 speed.max=100
    export async function forwardAsync(speed: number) {
        await moveHub().motorC.constant(speed);
    }

    /**
     * Move backward
     * @param speed speed, eg: 50
     */
    //% weight=8
    //% blockId=mh_c_backward block="C: move backward with speed %speed"
    //% speed.min=0 speed.max=100
    export async function backwardAsync(speed: number) {
        await moveHub().motorC.constant(-speed);
    }

    /**
     * Stop
     */
    //% weight=7
    //% blockId=mh_c_stop block="C: stop"
    export async function stopAsync() {
        await moveHub().motorC.stop();
    }

    /**
     * Move forward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=6
    //% blockId=mh_c_forwardTimed block="C: move forward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    export async function forwardTimedAsync(speed: number, duration: number) {
        await moveHub().motorC.timedAndWait(duration * 1000, speed);
    }

    /**
     * Move backward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=5
    //% blockId=mh_c_backwardTimed block="C: move backward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    export async function backwardTimedAsync(speed: number, duration: number) {
        await moveHub().motorC.timedAndWait(duration * 1000, -speed);
    }

    /**
     * Move forward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=4
    //% blockId=mh_c_forwardAngled block="C: move forward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    export async function forwardAngledAsync(speed: number, angle: number) {
        await moveHub().motorC.angledAndWait(angle, speed);
    }

    /**
     * Move backward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=3
    //% blockId=mh_c_backwardAngled block="C: move backward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    export async function backwardAngledAsync(speed: number, angle: number) {
        await moveHub().motorC.angledAndWait(angle, -speed);
    }
}

namespace pxsim.motorD {
    /**
     * Move forward
     * @param speed speed, eg: 50
     */
    //% weight=9
    //% blockId=mh_d_forward block="D: move forward with speed %speed"
    //% speed.min=0 speed.max=100
    export async function forwardAsync(speed: number) {
        await moveHub().motorD.constant(speed);
    }

    /**
     * Move backward
     * @param speed speed, eg: 50
     */
    //% weight=8
    //% blockId=mh_d_backward block="D: move backward with speed %speed"
    //% speed.min=0 speed.max=100
    export async function backwardAsync(speed: number) {
        await moveHub().motorD.constant(-speed);
    }

    /**
     * Stop
     */
    //% weight=7
    //% blockId=mh_d_stop block="D: stop"
    export async function stopAsync() {
        await moveHub().motorD.stop();
    }

    /**
     * Move forward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=6
    //% blockId=mh_d_forwardTimed block="D: move forward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    export async function forwardTimedAsync(speed: number, duration: number) {
        await moveHub().motorD.timedAndWait(duration * 1000, speed);
    }

    /**
     * Move backward for some time
     * @param speed speed, eg: 50
     * @param duration duration in seconds, eg: 5
     */
    //% weight=5
    //% blockId=mh_d_backwardTimed block="D: move backward with speed %speed for %duration seconds"
    //% speed.min=0 speed.max=100
    export async function backwardTimedAsync(speed: number, duration: number) {
        await moveHub().motorD.timedAndWait(duration * 1000, -speed);
    }

    /**
     * Move forward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=4
    //% blockId=mh_d_forwardAngled block="D: move forward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    export async function forwardAngledAsync(speed: number, angle: number) {
        await moveHub().motorD.angledAndWait(angle, speed);
    }

    /**
     * Move backward for some angle
     * @param speed speed, eg: 50
     * @param angle angle in degrees, eg: 360
     */
    //% weight=3
    //% blockId=mh_d_backwardAngled block="D: move backward with speed %speed for %angle degrees"
    //% speed.min=0 speed.max=100
    export async function backwardAngledAsync(speed: number, angle: number) {
        await moveHub().motorD.angledAndWait(angle, -speed);
    }
}

namespace pxsim.colorDistanceC {
    /**
     * Execute when color or distance has changed
     */
    //% weight=9
    //% blockId=mh_c_onColorOrDistanceChanged block="C: when color or distance has changed"
    export async function onColorOrDistanceChangedAsync(handler: (color: Color | undefined, distance: number) => void) {
        await moveHub().colorAndDistanceC.subscribe("colorAndDistance", (value) => runtime.runFiberAsync(handler as any, value.color, value.distance));
    }

    /**
     * Execute when luminosity has changed
     */
    //% weight=8
    //% blockId=mh_c_onLuminosityChanged block="C: when luminosity has changed"
    export async function onLuminosityChangedAsync(handler: (luminosity: number) => void) {
        await moveHub().colorAndDistanceC.subscribe("luminosity", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Set sensor mode
     * @param mode sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_c_cd_mode block="C: luminosity %mode=toggleYesNo"
    export async function luminosityModeAsync(mode: boolean) {
        await moveHub().colorAndDistanceC.setLuminosityMode(mode);
    }
}

namespace pxsim.colorDistanceD {
    /**
     * Execute when color or distance has changed
     */
    //% weight=9
    //% blockId=mh_d_onColorOrDistanceChanged block="D: when color or distance has changed"
    export async function onColorOrDistanceChangedAsync(handler: (color: Color | undefined, distance: number) => void) {
        await moveHub().colorAndDistanceD.subscribe("colorAndDistance", (value) => runtime.runFiberAsync(handler as any, value.color, value.distance));
    }

    /**
     * Execute when luminosity has changed
     */
    //% weight=8
    //% blockId=mh_d_onLuminosityChanged block="D: when luminosity has changed"
    export async function onLuminosityChangedAsync(handler: (luminosity: number) => void) {
        await moveHub().colorAndDistanceD.subscribe("luminosity", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Set sensor mode
     * @param mode sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_d_cd_mode block="D: luminosity %mode=toggleYesNo"
    export async function luminosityModeAsync(mode: boolean) {
        await moveHub().colorAndDistanceD.setLuminosityMode(mode);
    }
}

namespace pxsim.tilt {
    /**
     * Execute when tilt has changed (simple mode)
     */
    //% weight=9
    //% blockId=mh_tilt_onChangedSimple block="when tilt has changed"
    export async function onChangedSimpleAsync(handler: (orientation: Orientation) => void) {
        await moveHub().subscribeTilt("simple", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Execute when tilt has changed (precise mode)
     */
    //% weight=8
    //% blockId=mh_tilt_onChangedPrecise block="when tilt has changed"
    export async function onChangedPreciseAsync(handler: (x: number, y: number, z: number) => void) {
        await moveHub().subscribeTilt("precise", (value) => runtime.runFiberAsync(handler as any, value.x, value.y, value.z));
    }

    /**
     * Set sensor mode
     * @param mode sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_tilt_mode block="precise tilt %mode=toggleYesNo"
    export async function preciseModeAsync(mode: boolean) {
        await moveHub().setTiltPreciseMode(mode);
    }
}

namespace pxsim.movehub {
    /**
     * Set LED color
     * @param color LED color, eg: Color.Pink
     */
    //% weight=9
    //% blockId=mh_led block="set LED color to %color"
    export async function ledAsync(color: Color) {
        await moveHub().led(color);
    }

    /**
     * Execute when button is pressed
     */
    //% weight=8
    //% blockId=mh_onButtonPressed block="when button is pressed"
    export async function onButtonPressedAsync(handler: RefAction) {
        await moveHub().subscribeButton("pressed", () => runtime.runFiberAsync(handler));
    }

    /**
     * Execute when button is released
     */
    //% weight=7
    //% blockId=mh_onButtonReleased block="when button is released"
    export async function onButtonReleasedAsync(handler: RefAction) {
        await moveHub().subscribeButton("released", () => runtime.runFiberAsync(handler));
    }

    /**
     * Wait for some time
     * @param delay time to wait in seconds, eg: 5
     */
    //% weight=6
    //% blockId=mh_wait block="wait for %delay seconds"
    export function waitAsync(delay: number) {
        return Promise.delay(delay * 1000);
    }
}

namespace pxsim.rotationAB {
    /**
     * Execute when angle has changed
     */
    //% weight=9
    //% blockId=mh_ab_onAngleChanged block="AB: when angle has changed"
    export async function onAngleChangedAsync(handler: (angle: number) => void) {
        await moveHub().motorAB.subscribe("angle", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Execute when speed has changed
     */
    //% weight=8
    //% blockId=mh_ab_onSpeedChanged block="AB: when speed has changed"
    export async function onSpeedChangedAsync(handler: (speed: number) => void) {
        await moveHub().motorAB.subscribe("speed", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Set rotation sensor mode
     * @param mode rotation sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_ab_mode block="AB: speed %mode=toggleYesNo"
    export async function speedModeAsync(mode: boolean) {
        await moveHub().motorAB.setSpeedMode(mode);
    }
}

namespace pxsim.rotationC {
    /**
     * Execute when angle has changed
     */
    //% weight=9
    //% blockId=mh_c_onAngleChanged block="C: when angle has changed"
    export async function onAngleChangedAsync(handler: (angle: number) => void) {
        await moveHub().motorC.subscribe("angle", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Execute when speed has changed
     */
    //% weight=8
    //% blockId=mh_c_onSpeedChanged block="C: when speed has changed"
    export async function onSpeedChangedAsync(handler: (speed: number) => void) {
        await moveHub().motorC.subscribe("speed", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Set rotation sensor mode
     * @param mode rotation sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_c_mode block="C: speed %mode=toggleYesNo"
    export async function speedModeAsync(mode: boolean) {
        await moveHub().motorC.setSpeedMode(mode);
    }
}

namespace pxsim.rotationD {
    /**
     * Execute when angle has changed
     */
    //% weight=9
    //% blockId=mh_d_onAngleChanged block="D: when angle has changed"
    export async function onAngleChangedAsync(handler: (angle: number) => void) {
        await moveHub().motorD.subscribe("angle", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Execute when speed has changed
     */
    //% weight=8
    //% blockId=mh_d_onSpeedChanged block="D: when speed has changed"
    export async function onSpeedChangedAsync(handler: (speed: number) => void) {
        await moveHub().motorD.subscribe("speed", (value) => runtime.runFiberAsync(handler as any, value));
    }

    /**
     * Set rotation sensor mode
     * @param mode rotation sensor flag, eg: true
     */
    //% weight=7
    //% blockId=mh_d_mode block="D: speed %mode=toggleYesNo"
    export async function speedModeAsync(mode: boolean) {
        await moveHub().motorD.setSpeedMode(mode);
    }
}

namespace pxsim {
    export function log(msg: string) {
        console.log(`%c${new Date().toISOString()}`, "color:blue; font-style: italic", msg);
    }
}
