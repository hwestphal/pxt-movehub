//% color=#00bcd4 weight=104 icon="\uf04b" block="Motor AB"
namespace motorAB {
}

//% color=#00bcd4 weight=103 icon="\uf04b" block="Motor C"
namespace motorC {
}

//% color=#00bcd4 weight=102 icon="\uf04b" block="Motor D"
namespace motorD {
}

//% color=#00bcd4 weight=100 icon="\uf04b" block="Misc."
namespace movehub {
    /**
     * Return color value
     */
    //% weight=1
    //% blockId=mh_color block="%color"
    //% shim=TD_ID
    export function __color(color: Color) {
        return color;
    }
}

//% color=#00bcd4 weight=49 icon="\uf04b" advanced=true block="Color/Distance C"
namespace colorAndDistanceC {
}

//% color=#00bcd4 weight=48 icon="\uf04b" advanced=true block="Color/Distance D"
namespace colorAndDistanceD {
}

//% color=#00bcd4 weight=47 icon="\uf04b" advanced=true
namespace tilt {
    /**
     * Return orientation value
     */
    //% weight=1
    //% blockId=mh_orientation block="%orientation"
    //% shim=TD_ID
    export function __orientation(orientation: Orientation) {
        return orientation;
    }
}

declare namespace console {
    /**
     * Print out message in browser console
     */
    //% shim=log
    function log(msg: string): void;
}
