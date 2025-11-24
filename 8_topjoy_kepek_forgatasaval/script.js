const kupak = document.querySelector('.kupak');
const szoveg = document.querySelector('#szoveg');
const tarolo = document.querySelector('.tarolo');

const uzik = [];
let isClosed = true;

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./uzik.csv');
        //console.log(response);
        const text = await response.text();
        //console.log(text);
        const sorok = text.split('\n').map(sor => sor.trim())
        //console.log(sorok);

        sor.forEach(sor => {
            uzik.push(sor);
        });
    } catch (error) {
        console.log(error);
    }
});  
//console.log(uzik);          