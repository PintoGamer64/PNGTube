// Node Modules
const { ipcRenderer, contextBridge, webFrame } = require('electron');

function EventWindow(typeEvent = 'minimize' || 'close' || 'window') {
    ipcRenderer.send(typeEvent);
}
function SendUpdateConfig(state) {
    ipcRenderer.send('NewConfig', state)
}
function uploadBackground(image_url, image_name) {
    ipcRenderer.send('uploadBackground', {
        image_url,
        image_name
    })
}
function ZoomFactor(value) {
    webFrame.setZoomFactor(value);
}
const ActualSettings = new Promise((resolve, reject) => {
    ipcRenderer.on('getSettings', (event, config) => {
        resolve(config)
        reject(new Error('Error de configuracion'))
    })
}).catch(err => console.log(err))
const BackgroundImage = new Promise((resolve, reject) => {
    ipcRenderer.on('getAppBackground', (event, { image, color, wallpapers, select }) => {
        resolve({
            image,
            color,
            wallpapers,
            select
        })
        reject(new Error('Contenido no encontrado'))
    })
}).catch(err => console.log(err))

contextBridge.exposeInMainWorld(
    'pngtubeProcess',
    {
        EventWindow,
        BackgroundImage,
        ActualSettings,
        SendUpdateConfig,
        uploadBackground,
        ZoomFactor
    }
);