window.addEventListener('DOMContentLoaded', fetchData)

async function fetchData() {
    try {
        let images =[]
        const URL = 'https://picsum.photos/v2/list'
        const res = await fetch(URL)
        images = await res.json()
        loadAuthors(images)
        displayImages(images)

    } catch (error) {
        console.log(error)
    }
}

function loadAuthors(images) {
    const szerzok = document.querySelector('#szerzok')
    szerzok.innerHTML = ''
    const firstOption = document.createElement('option')
    firstOption.value = ''
    firstOption.textContent = 'Összes'

    szerzok.append(firstOption)

    const authors = images.map(x => x.author)

    const unique = new Set(authors)

    unique.forEach((author) => {
        const option = document.createElement('option')
        option.value = author
        option.textContent = author

        szerzok.append(option)
    })
    szerzok.addEventListener('change', () => authorFilter(images, szerzok))

}

function displayImages(images) {
    const tarolo = document.querySelector('#tarolo')
    tarolo.innerHTML = ''
    images.forEach((image) => {
        const card = document.createElement('div')
        card.classList.add('card')
        const cardInner = document.createElement('div')
        cardInner.classList.add('card-inner')
        const img = document.createElement('img')
        img.classList.add('img')
        img.alt = image.author
        img.src = `https://picsum.photos/id/${image.id}/600/400`
        const h3 = document.createElement('h3')
        h3.textContent = `📷 ${image.author}`



        cardInner.append(img)
        cardInner.append(h3)
        card.append(cardInner)
        tarolo.append(card)
    })
}

function authorFilter(images, szerzok) {
    const value = szerzok.value
    if (value === '') {
        return displayImages(images)
    }

    const filteredList = images.filter(x => x.author === value)
    displayImages(filteredList)
}