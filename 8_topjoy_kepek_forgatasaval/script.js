const kupak = document.querySelector('#kupak');
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

        sorok.forEach(sor => {
            uzik.push(sor);
        });
    } catch (error) {
        console.log(error);
    }
});  
//console.log(uzik);

const kupakAnimalas =  async(start, end) => {
    const step = start < end ? 1 : -1;

    for (let i = start; i !== end + step; i +=step) {
        await new Promise(resolve => setTimeout(resolve, 13));
        kupak.src = `./images/bottlecap_${i}.png`;
    };
};

tarolo.addEventListener('click', async () => {
    if(isClosed) {
        await kupakAnimalas(0, 10);
        szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)]
        isClosed = false;
    } else {
        szoveg.textContent = '';
        await kupakAnimalas(10, 0);
        isClosed = true;
    }
});