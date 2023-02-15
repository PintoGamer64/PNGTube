// Node Modules
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { readdirSync } = require('node:fs');
const { homedir } = require('os');
const { join } = require('path');

// Import Classes
const { InitProcess } = require('./init');
const { UserConfig } = require('./scripts/Export');

// Initialize
const { __Init__ } = InitProcess();
const { InsertConfig } = UserConfig();

// Executions
__Init__();

const Settings = require(`${join(homedir(), '/AppData/Roaming/PNGtubeSettings/settings.json')}`);

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 680,
        width: 1000,
        height: 780,
        titleBarStyle: 'hidden',
        webPreferences: {
            images: true,
            devTools: true,
            nodeIntegration: true,
            preload: join(__dirname, './preloads/mainProcess.js')
        }
    });
    mainWindow.loadURL(`${join(__dirname, 'Interface/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);

    mainWindow.webContents.on('did-finish-load', () => {
        let imageOriginal = join(Settings.wallpapersPath, `${Settings.appBackground.wallpaper}.png`);
        let imageRender = '';
        imageOriginal.split('\\').map(rute => {
            imageRender.length < 1 ?
                imageRender += rute
                :
                imageRender += `/${rute}`
        })
        mainWindow.webContents.send('getAppBackground', {
            image: imageRender,
            color: Settings.appBackground.colorBackground,
            wallpapers: readdirSync(join(Settings.wallpapersPath), { encoding: 'utf-8' })
        })
        mainWindow.webContents.send('getSettings', Settings);
    })
}

function Restar_HardAcc() {
    let userResponce = dialog.showMessageBoxSync(mainWindow, {
        message: 'esto requiere reiniciar la aplicacion, ¿quieres reiniciar?',
        buttons: ['Reinicar Ahora', 'Reinicar Mas Tarde'],
        title: 'Aceleracion por hardware'
    })
    if (userResponce === 0) {
        app.quit();
        app.relaunch();
    }
}

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

//Window Events
ipcMain.on('window', () => {
    if (mainWindow.isMaximized()) return mainWindow.restore();
    return mainWindow.maximize();
});
ipcMain.on('minimize', () => {
    mainWindow.minimize();
});
ipcMain.on('close', () => {
    app.quit();
});
//Settings Events
ipcMain.on('NewConfig', (event, config) => {
    InsertConfig(config)
    Restar_HardAcc();
})

if (!Settings.appConfig.hardwareAcceleration) {
    app.disableHardwareAcceleration();
    console.log('Aceleracion por hardware desabilitada')
}