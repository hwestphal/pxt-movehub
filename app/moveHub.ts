import { Color, discoverMoveHub, IMoveHub } from "@hwestphal/ts-movehub";

let moveHub: IMoveHub | undefined;
let allocated = false;

export async function allocateMoveHub() {
    if (allocated) {
        throw new Error("already allocated");
    }
    if (moveHub) {
        if (!moveHub.connected) {
            moveHub = undefined;
        } else {
            allocated = true;
            console.log("Allocated Move Hub.");
            return moveHub;
        }
    }
    console.log("Looking for Move Hub...");
    moveHub = await discoverMoveHub();
    allocated = true;
    console.log("Connected and allocated Move Hub.");
    return moveHub;
}

export async function releaseMoveHub() {
    if (!allocated) {
        throw new Error("not allocated");
    }
    if (!moveHub!.connected) {
        moveHub = undefined;
    } else {
        moveHub = await moveHub!.reset();
        await moveHub.motorAB.stop();
        await moveHub.motorC.stop();
        await moveHub.motorD.stop();
        await moveHub.led(Color.Off);
    }
    allocated = false;
    console.log("Released Move Hub.");
}
