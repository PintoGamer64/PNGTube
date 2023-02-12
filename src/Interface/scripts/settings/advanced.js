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
    menus.map(({ element, id, child }) => {
        if (id === 'advanced') {
            element.classList.add('select');
            element.classList.remove('non-select');
            child.classList.add('hide');
            child.classList.remove('hide');
            return;
        }
        element.classList.remove('select');
        element.classList.add('non-select')
        child.classList.remove('hide');
        child.classList.add('hide')
    })
})
interface.addEventListener('click', () => {
    menus.map(({ element, id, child }) => {
        if (id === 'interface') {
            element.classList.add('select');
            element.classList.remove('non-select');
            child.classList.add('hide');
            child.classList.remove('hide');
            return;
        }
        element.classList.remove('select');
        element.classList.add('non-select')
        child.classList.remove('hide');
        child.classList.add('hide')
    })
})
modelos.addEventListener('click', () => {
    menus.map(({ element, id, child }) => {
        if (id === 'modelos') {
            element.classList.add('select');
            element.classList.remove('non-select');
            child.classList.add('hide');
            child.classList.remove('hide');
            return;
        }
        element.classList.remove('select');
        element.classList.add('non-select')
        child.classList.remove('hide');
        child.classList.add('hide')
    })
})