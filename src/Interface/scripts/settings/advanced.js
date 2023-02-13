// Functions
hard_acc.addEventListener('click', e => {
    if (!config.appConfig.hardwareAcceleration) {
        hard_acc.innerHTML = '🟢'
    }
    if (config.appConfig.hardwareAcceleration) {
        hard_acc.innerHTML = '🔴'
    }
    config.appConfig.hardwareAcceleration = !config.appConfig.hardwareAcceleration;;
    console.log(config)
    e.stopPropagation();
})