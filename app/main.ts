import { app, BrowserWindow, remote } from "electron";
import * as path from "path";
import * as pxt from "pxt-core";

let win: BrowserWindow | null;

async function startApp() {
    await pxt.mainCli(path.join(__dirname, ".."), ["serve", "-no-browser"]);
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
    win.loadURL(`http://localhost:3232/#local_token=${pxt.globalConfig.localToken}&wsport=3233`);
    win.webContents.openDevTools();
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
