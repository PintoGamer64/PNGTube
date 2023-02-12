const settingsBtn = document.getElementById('settings');
const modalToll = document.getElementById('modalToll');
const hard_acc = document.getElementById('hard-acc');

// Settings Menu
const advanced = document.getElementById('advanced');
const interface = document.getElementById('interface');

let menus = [
    {
        id: 'advanced',
        element: advanced
    }, {
        id: 'interface',
        element: interface
    }
]

// States
let config, SettingsHide = true, hard_accState;

// Initialize
window.onload = () => {
    modalToll.classList.add('hide')
}
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