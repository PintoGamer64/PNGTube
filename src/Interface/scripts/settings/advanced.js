// Functions
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
advanced.addEventListener('click', () => {
    menus.map(menu => {

    })
})
interface.addEventListener('click', () => {

})