Background_Select.addEventListener('click', async () => {
    await new Promise((resolve, reject) => {
        Background_Upload.onchange = () => {
            resolve(Background_Upload.files[0]);
        }
        Background_Upload.click();
    })
        .then(res => {
            let imageOriginal = res.path;
            let imageRender = '';
            imageOriginal.split('\\').map(rute => {
                imageRender.length < 1 ?
                    imageRender += rute
                    :
                    imageRender += `/${rute}`
            })
            Background_Image_Preview.setAttribute('src', imageRender)
            window.pngtubeProcess.uploadBackground(imageRender, res.name)
        });
});
Available_Images.addEventListener('change', (event) => {
    let newImageSelected = `${config.wallpapersPath.replace(/\\/g, '/')}/${event.target.value}.png`
    Background_Image_Preview.setAttribute('src', newImageSelected)
    document.body.style.backgroundImage = `url("${newImageSelected}")`
    config.appBackground.wallpaper = event.target.value
    console.log(config);
})
UI_Color.addEventListener('change', (e) => {
    const oldStyles = head.querySelectorAll('style');
    let newStyle = document.createElement('style');
    oldStyles.forEach(style => style.remove());
    console.log(e.target.value);
    newStyle.innerHTML = `:root { --UI-Style-Color: ${e.target.value}; }`;
    config.appBackground.colorBackground = e.target.value;
    head.appendChild(newStyle);
});
zoomRange.addEventListener('change', (event) => {
    window.pngtubeProcess.ZoomFactor(event.target.value / 100);
    console.log(event.target.value / 100);
    inputRange_label.innerText = `${event.target.value} %`;
    config.appConfig.zoomApplication = event.target.value / 100;
})