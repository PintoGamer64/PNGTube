const minimizeBtn = document.getElementById('minimize');
const windowBtn = document.getElementById('window');
const closeBtn = document.getElementById('close');

window.pngtubeProcess.BackgroundImage
    .then(({ image, color }) => {
        document.body.style.backgroundColor = color
        document.body.style.backgroundImage = `url("${image}")`
    });

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