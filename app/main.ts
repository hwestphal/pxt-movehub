import { app, BrowserWindow, globalShortcut } from "electron";
import * as path from "path";

const dev = process.argv.slice(-1)[0] === "-D";

let win: BrowserWindow | null;
let localToken: string;

async function startApp() {
    if (dev) {
        const pxt = await import("pxt-core");
        await pxt.mainCli(path.join(__dirname, ".."), ["serve", "-no-browser"]);
        localToken = pxt.globalConfig.localToken;
    }
    globalShortcut.register("CommandOrControl+Shift+I", () => {
        if (win) {
            win.webContents.openDevTools({ mode: "right" });
        }
    });
    createWindow();
}

function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, "preload.js"),
        },
    });
    win.setMenu(null);
    win.on("closed", () => {
        win = null;
    });
    win.maximize();
    if (dev) {
        win.loadURL(`http://localhost:3232/#local_token=${localToken}&wsport=3233`);
    } else {
        win.loadFile(path.join(__dirname, "..", "built", "packaged", "index.html"));
    }
}

app.on("ready", startApp);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});
