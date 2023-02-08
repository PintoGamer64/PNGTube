// Node Modules
const { ipcRenderer, contextBridge } = require('electron');

function EventWindow(typeEvent = 'minimize' || 'close' || 'window') {
    ipcRenderer.send(typeEvent);
}
function HarwareAcceleration(state) {
    ipcRenderer.send('setHardwareAcceleration', state)
}
const ActualSettings = new Promise((resolve, reject) => {
    ipcRenderer.on('getSettings', (event, config) => {
        resolve(config)
        reject(new Error('Error de configuracion'))
    })
}).catch(err => console.log(err))
const BackgroundImage = new Promise((resolve, reject) => {
    ipcRenderer.on('getAppBackground', (event, { image, color }) => {
        resolve({
            image,
            color
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
        HarwareAcceleration
    }
);