window.addEventListener('DOMContentLoaded', fetchData)

async function fetchData() {
    try {
        let characters = []
        const URL = 'https://akabab.github.io/starwars-api/api/all.json'
        const res = await fetch(URL)
        characters = await res.json()
        
        loadGenders(characters)
        displayCharacters(characters)

    } catch (error) {
        console.log('Hiba történt az adatok betöltésekor:', error)
    }
}

function loadGenders(characters) {
    const nemek = document.querySelector('#genderFilter')
    nemek.innerHTML = ''
    
    const firstOption = document.createElement('option')
    firstOption.value = ''
    firstOption.textContent = 'Mind'
    nemek.append(firstOption)

    const genders = characters.map(x => x.gender)
    const unique = new Set(genders)

    unique.forEach((gender) => {
        if (gender === 'male' || gender === 'female') {
            const option = document.createElement('option')
            option.value = gender
            option.textContent = gender === 'male' ? 'Férfi' : 'Nő' 

            nemek.append(option)
        }
    })
    
    nemek.addEventListener('change', () => genderFilter(characters, nemek))
}

function displayCharacters(characters) {
    const tarolo = document.querySelector('#characterGrid')
    tarolo.innerHTML = ''
    
    characters.forEach((character) => {
        const card = document.createElement('div')
        card.classList.add('card')
        
        const img = document.createElement('img')
        img.src = character.image
        img.alt = character.name
        
        const nameDiv = document.createElement('div')
        nameDiv.classList.add('name')
        nameDiv.textContent = character.name

        card.append(img)
        card.append(nameDiv)
        tarolo.append(card)
    })
}

function genderFilter(characters, nemek) {
    const value = nemek.value
    
    if (value === '') {
        return displayCharacters(characters)
    }

    const filteredList = characters.filter(x => x.gender === value)
    displayCharacters(filteredList)
}