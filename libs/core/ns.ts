//% color=#888888 weight=104 icon="\uf1b9" block="Motor AB"
namespace motorAB {
}

//% color=#00bcd4 weight=103 icon="\uf013" block="Motor C"
namespace motorC {
}

//% color=#00bcd4 weight=102 icon="\uf013" block="Motor D"
namespace motorD {
}

//% color=#74df00 weight=100 icon="\uf0c2" block="Misc."
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

//% color=#ff8000 weight=49 icon="\uf06e" advanced=true block="Color/Distance C"
namespace colorAndDistanceC {
}

//% color=#ff8000 weight=48 icon="\uf06e" advanced=true block="Color/Distance D"
namespace colorAndDistanceD {
}

//% color=#ff00bf weight=47 icon="\uf124" advanced=true
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
