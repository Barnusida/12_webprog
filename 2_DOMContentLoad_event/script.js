// Városok listája
const cities = [
    { name: "Berlin", value: "berlin"},
    { name: "Tokyo", value: "tokyo" },
    { name: "Rio", value: "rio" },
    { name: "Nairobi", value: "nairobi" },
    { name: "Lisszabon", value: "lisbon" },
    { name: "Moszkva", value: "moscow" },
    { name: "Denver", value: "denver" },
    { name: "Stockholm", value: "stockholm" },
    { name: "Helsinki", value: "helsinki" },
    { name: "Professzor", value: "professor" },
];
const select = document.querySelector('#city');
window.addEventListener('DOMContentLoaded', betolt);
function betolt() {
    cities.forEach(city=>{
        const option = document.createElement('option'); 
        option.value = city.value;
        option.textContent = city.name;
        if(city.name === 'Professzor'){
            option.selected = true;
        }
        select.append(option);
        select.addEventListener('change', ()=>{
            const selected = select.value;
            console.log(selected);   
            const demo = document.querySelector('#demo');
            demo.textContent = selected;
            const image = document.querySelector('#image');
            const img = document.createElement('img');
            img.src = `./img/${selected}.jpg`;
            img.alt = selected;
            img.title = (selected);
            console.log(img);
            image.replaceChildren(img);
        })
    });
}