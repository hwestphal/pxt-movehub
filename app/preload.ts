import { remote } from "electron";

const { allocateMoveHub, releaseMoveHub } = remote.require("./moveHub");

(window as any).allocateMoveHub = allocateMoveHub;
(window as any).releaseMoveHub = releaseMoveHub;
