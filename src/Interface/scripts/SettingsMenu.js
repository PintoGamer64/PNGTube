const settingsBtn = document.getElementById('settings');
const modalToll = document.getElementById('modalToll');
const hard_acc = document.getElementById('hard-acc');

// Settings Menu
const advanced = document.getElementById('advanced');
const interface = document.getElementById('interface');
const modelos = document.getElementById('modelos');
// Childs
const Avanzado = document.getElementById('Avanzado');
const Interfaz = document.getElementById('Interfaz');
const Modelos = document.getElementById('Modelos');

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

// States
let config, SettingsHide = true, hard_accState;

// Initialize
window.pngtubeProcess.ActualSettings
    .then(res => {
        config = res
        if (config.appConfig.hardwareAcceleration) {
            hard_acc.innerHTML = '🟢'
        }
        if (!config.appConfig.hardwareAcceleration) {
            hard_acc.innerHTML = '🔴'
        }
    })

// Functions
settingsBtn.addEventListener('click', e => {
    e.stopPropagation();
    hard_acc.removeEventListener('click', () => { })
    SettingsHide = !SettingsHide
    console.log(SettingsHide)
    if (!SettingsHide) {
        modalToll.classList.remove('hide')
        return;
    }
    return modalToll.classList.add('hide');
})