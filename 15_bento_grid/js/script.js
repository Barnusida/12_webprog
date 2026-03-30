const BASE_URL = 'http://nodejs1.dszcbaross.edu.hu:21003'
const API_URL = 'http://nodejs1.dszcbaross.edu.hu:21003/api/allPictures'

window.addEventListener('DOMContentLoaded', fetchPictures)

async function fetchPictures() {
    const gallery = document.querySelector('#gallery')
    gallery.innerHTML = ''
    try {
        const response = await fetch(API_URL)
        const images = await response.json()
        renderImages(images, gallery)
    }
    catch (error) {
        console.error('Error fetching pictures:', error)
        const p = document.createElement('p')
        p.textContent = 'Failed to load pictures. Please try again later.'
        gallery.append(p)
    }
}

function renderImages(images, gallery) {
    images.forEach(image => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.id = image.id
        const img = document.createElement('img')
        img.src = `${BASE_URL}${image.img}`
        img.alt = image.name
        img.title = image.name
        img.loading = 'lazy'

        card.append(img)
        gallery.append(card)
        
    });
}