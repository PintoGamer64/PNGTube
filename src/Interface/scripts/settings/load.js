// Initialize
window.pngtubeProcess.ActualSettings
    .then(res => {
        config = res
        // Hardware Acceleration
        if (res.appConfig.hardwareAcceleration) {
            hard_acc.innerHTML = '🟢'
        }
        if (!res.appConfig.hardwareAcceleration) {
            hard_acc.innerHTML = '🔴'
        }
        // UI Color
        let newStyle = document.createElement('style');
        newStyle.innerHTML = `:root { --UI-Style-Color: ${res.appBackground.colorBackground};\n--UI-Style-Color-Grad: ${res.appBackground.colorBackground}60; }`;
        head.appendChild(newStyle);
        UI_Color.setAttribute('value', res.appBackground.colorBackground)
        SettingsMenu.style.display = 'none'
        modalToll.style.display = 'none';
        // Image Preview
        Background_Image_Preview.setAttribute('src', `${res.wallpapersPath}\\${res.appBackground.wallpaper}.png`)
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