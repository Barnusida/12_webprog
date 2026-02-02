const cards = document.getElementById('cards')

const LISTA_URL = 'src/kepek.txt'
const IMG_MAPPA = 'img/'

window.addEventListener('DOMContentLoaded', loadCards)

async function loadCards() {
    try {
        const response = await fetch(LISTA_URL)
        if (!response.ok) {
            return alert('Hiba a fájl betöltésekor')
        } 

        const text = await response.text()

        const files = text.split('\n').map(sor => sor.trim()).filter(sor => sor.length > 0)

        if (files.length === 0) {
            return alert('Üres  a lista')
        }

        cards.innerHTML = ''

        files.forEach((fileName, index) => {
            cards.appendChild(createCard(fileName, index + 1))

        })


    } catch (error) {
        alert('Hiba: ${error}')
    }
}

function createCard(fileName, index) {
    const card = document.createElement('div')
    card.className = 'card'

    const img = document.createElement('img')
    img.src = IMG_MAPPA + fileName
    img.alt = fileName
    card.appendChild(img)

    const content = document.createElement('div')

    const title = document.createElement('h3')
    title.textContent = `Kártya #${index}`
    content.appendChild(title)


    const text = document.createElement('p')
    text.textContent = fileName
    content.appendChild(text)

    card.appendChild(content)

    return card
}
