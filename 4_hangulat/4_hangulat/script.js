const moodSlider = document.getElementById('moodSlider');

moodSlider.addEventListener('input', () => {
    const sliderValue = parseInt(moodSlider.value) + 1;
    const moodImage = document.getElementById('moodImage');
    moodImage.src = `./img/${sliderValue}.png`;
});   