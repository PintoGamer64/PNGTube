// Elements
const minimizeBtn = document.getElementById('minimize');
const windowBtn = document.getElementById('window');
const closeBtn = document.getElementById('close');
const modalToll = document.getElementById('modalToll');
const Background_Image_Preview = document.getElementById('Background_Image_Preview');
const Restore = document.getElementById('Restore');
const Save_Restart = document.getElementById('Save_Restart');
const root = document.querySelector(':root');
const head = document.querySelector('head');
const SettingsMenu = document.getElementById('SettingsMenu');
// Operations
const settingsBtn = document.getElementById('settings');
const hard_acc = document.getElementById('hard-acc');
const Background_Select = document.getElementById('Background_Select');
//Input Select
const Background_Upload = document.getElementById('Background_Upload');
const UI_Color = document.getElementById('UI_Color');
// Settings Menu
const advanced = document.getElementById('advanced');
const interface = document.getElementById('interface');
const modelos = document.getElementById('modelos');
// Childs
const Avanzado = document.getElementById('Avanzado');
const Interfaz = document.getElementById('Interfaz');
const Modelos = document.getElementById('Modelos');
// Definitions
let config, SettingsHide = true, hard_accState;
let menus = [
    {
        id: 'advanced',
        element: advanced,
        child: Avanzado
    }, {
        id: 'interface',
        element: interface,
        child: Interfaz
    }, {
        id: 'modelos',
        element: modelos,
        child: Modelos
    }
]

window.pngtubeProcess.BackgroundImage
    .then(({ image, color }) => {
        document.body.style.backgroundColor = color
        document.body.style.backgroundImage = `url("${image}")`
    });

// Functions
settingsBtn.addEventListener('click', e => {
    e.stopPropagation();
    SettingsHide = !SettingsHide
    console.log(SettingsHide)
    if (!SettingsHide) {
        modalToll.style.display = 'grid'
        modalToll.classList.remove('hide')
        SettingsMenu.style.display = 'flex'
        return;
    }
    SettingsMenu.style.display = 'none'
    modalToll.classList.add('hide')
    return modalToll.style.display = 'none';
})
minimizeBtn.addEventListener('click', () => {
    window.pngtubeProcess.EventWindow('minimize');
    console.log('entrando')
});
windowBtn.addEventListener('click', () => {
    window.pngtubeProcess.EventWindow('window');
    console.log('entrando')
});
closeBtn.addEventListener('click', () => {
    window.pngtubeProcess.EventWindow('close');
    console.log('entrando')
});
Save_Restart.addEventListener('click', () => {
    window.pngtubeProcess.SendUpdateConfig(config)
})
Restore.addEventListener('click', () => {
    window.pngtubeProcess.ActualSettings
        .then(res => console.log('datos de configuracion actual', res))
})