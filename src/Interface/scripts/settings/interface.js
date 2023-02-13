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
        });
});
UI_Color.addEventListener('change', (e) => {
    const oldStyles = head.querySelectorAll('style');
    let newStyle = document.createElement('style');
    oldStyles.forEach(style => style.remove());
    console.log(e.target.value);
    newStyle.innerHTML = `:root { --UI-Style-Color: ${e.target.value}; }`;
    config.appBackground.colorBackground = e.target.value;
    console.log(config);
    head.appendChild(newStyle);
})