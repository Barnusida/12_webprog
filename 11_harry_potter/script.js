const characters = document.querySelector('#characters');

const HP_URL = 'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json'

window.addEventListener('DOMContentLoaded', fetchCharacters)

async function fetchCharacters() {
    try {
        const response = await fetch(HP_URL);
        
        const chars = await response.json();

        displayCharacters(chars);
    } catch (error) {
        alert(error)
    }
}

function displayCharacters(chars) {

    if (!chars) {
        return alert('A tömböt elfelejtetted küldeni')
    }

    chars.forEach(char => {
        const card = document.createElement('div');
        card.className = 'card'
        
        const img = document.createElement('img');
        img.className = 'kep'
        img.src = fixImageUrls(char.image);
        img.alt = char.name;

        const name = document.createElement('div');
        name.className = 'kiemelt'
        name.textContent = char.name || 'Ismeretlen';

        const house = document.createElement('div');
        name.className = 'leiras'
        house.textContent = `Ház: ${char.house || 'Ismeretlen'}`;
        
        const year = document.createElement('div');
        name.className = 'leiras'
        year.textContent = `Születési év: ${char.yearOfBirth || 'Ismeretlen'}`;

        const actor = document.createElement('div');
        name.className = 'leiras'
        actor.textContent = `Színész: ${char.actor || 'Ismeretlen'}`;


        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(house);
        card.appendChild(year);
        card.appendChild(actor);
        characters.appendChild(card);
    });
}

function fixImageUrls(url) {
    if (!url) {
        return ''
    }
    return url
    .replace('http://hp-api.herokuapp.com' , 'http://hp-api.onrender.com')
    .replace('http://', 'https://')

}
