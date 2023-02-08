const settingsBtn = document.getElementById('settings');
const modalToll = document.getElementById('modalToll');
const hard_acc = document.getElementById('hard-acc');

// States
let config, SettingsHide = true, hard_accState;

// Initialize
window.onload = () => {
    modalToll.classList.add('hide')
    hard_acc.removeEventListener('click', () => { })
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

hard_acc.addEventListener('click', e => {
    console.log(config)
    if (!config.appConfig.hardwareAcceleration) {
        hard_accState = true;
        hard_acc.innerHTML = '🟢'
    }
    if (config.appConfig.hardwareAcceleration) {
        hard_accState = false;
        hard_acc.innerHTML = '🔴'
    }
    console.log(hard_accState)
    e.stopPropagation();
    console.log('hard-acc')
    window.pngtubeProcess.HarwareAcceleration(hard_accState)
})