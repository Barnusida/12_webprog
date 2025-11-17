const messages = [];
const messageBox = document.querySelector('#messageBox');
const messageButton = document.querySelector('#messageButton');
window.addEventListener('DOMContentLoaded', async   () => {
    try {
        console.log('Fetch kezdődik');
        const uzik = await fetch('./uzik.csv');
        const uzikText = (await uzik.text())
                        .split('\n')
                        .map(sor => sor.trim());
        uzikText.forEach(uzi => {
            messages.unshift(uzi);
        });
    } catch (error) {
        console.error(error);
    }
});
messageButton.addEventListener('click', () => {
    if (messages.length > 0) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageBox.textContent = messages[randomIndex];
    } else {
        messageBox.textContent = 'Nem található üzenet';
    }
});