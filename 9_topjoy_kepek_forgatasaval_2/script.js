const tarolo = document.querySelector('.tarolo');
const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('#szoveg');

const uzik = [];
let zarvaVanE = true;

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./uzik.csv');
        const  text = await response.text();
        const sorok = text
            .split('\n')
            .map(sor => sor.trim())
            .filter(sor => sor.length > 0);


        sorok.forEach(sor => uzik.push(sor));
    } catch (error) {
        console.error(error);
    }
});

tarolo.addEventListener('click', () => {
    if (zarvaVanE) {
        szoveg.textContent = '';
        tarolo.classList.remove('zar');
        tarolo.classList.add('nyit');
        zarvaVanE = false;

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * uzik.length);
            szoveg.textContent = uzik[randomIndex];
        }, 300);
    } else {
        szoveg.textContent = '';
        tarolo.classList.remove('nyit');
        tarolo.classList.add('zar');
        zarvaVanE = true;
    }
});