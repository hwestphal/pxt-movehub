//% color=#00bcd4 weight=100 icon="\uf04b" block="Move Hub"
namespace movehub {

    /**
     * Return orientation value
     */
    //% weight=70
    //% blockId=mhOrientation block="%orientation"
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
