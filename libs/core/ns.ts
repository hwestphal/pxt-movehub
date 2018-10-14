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
}

//% color=#00bcd4 weight=49 icon="\uf04b" advanced=true
namespace tilt {
    /**
     * Return orientation value
     */
    //% weight=1
    //% blockId=mh_Orientation block="%orientation"
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
