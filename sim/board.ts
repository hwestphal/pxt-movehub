/// <reference types="pxt-core/built/pxtsim" />

/* tslint:disable-next-line:interface-name */
declare interface Window {
    allocateMoveHub(): Promise<IMoveHub>;
    releaseMoveHub(): Promise<void>;
}

interface IColorAndDistanceValue {
    color: Color | undefined;
    distance: number;
}

interface ITiltValue {
    x: number;
    y: number;
    z: number;
}

interface IMotor {
    constant(speed: number, speedB?: number): Promise<void>;
    timedAndWait(time: number, speed: number, speedB?: number): Promise<void>;
    angledAndWait(angle: number, speed: number, speedB?: number): Promise<void>;
    stop(): Promise<void>;
    subscribe(event: "angle" | "speed", listener: (value: number) => void): Promise<void>;
    setSpeedMode(speed: boolean): Promise<void>;
}

interface IColorAndDistance {
    subscribe(event: "colorAndDistance", listener: (value: IColorAndDistanceValue) => void): Promise<void>;
    subscribe(event: "luminosity", listener: (value: number) => void): Promise<void>;
    setLuminosityMode(luminosity: boolean): Promise<void>;
}

interface IMoveHub {
    readonly motorAB: IMotor;
    readonly motorC: IMotor;
    readonly motorD: IMotor;
    readonly colorAndDistanceC: IColorAndDistance;
    readonly colorAndDistanceD: IColorAndDistance;
    led(color: Color): Promise<void>;
    subscribeButton(event: "pressed" | "released", listener: () => void): Promise<void>;
    subscribeTilt(event: "precise", listener: (value: ITiltValue) => void): Promise<void>;
    subscribeTilt(event: "simple", listener: (value: Orientation) => void): Promise<void>;
    setTiltPreciseMode(precise: boolean): Promise<void>;
}

namespace pxsim {

    initCurrentRuntime = () => {
        runtime.board = new MoveHubBoard();
    };

    export function moveHub(): IMoveHub {
        return (runtime.board as MoveHubBoard).moveHub!;
    }

    export class MoveHubBoard extends BaseBoard {
        moveHub: IMoveHub | undefined;

        async initAsync(msg: SimulatorRunMessage) {
            this.moveHub = await window.parent.allocateMoveHub();
        }

        kill() {
            if (this.moveHub) {
                this.moveHub = undefined;
                window.parent.releaseMoveHub();
            }
        }
    }

}
