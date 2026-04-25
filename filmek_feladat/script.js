const API_URL = 'https://nodejs111.dszcbaross.edu.hu/api/movie';

window.addEventListener('DOMContentLoaded', fetchMovies);

async function fetchMovies() {
    const gallery = document.querySelector('#gallery');
    const movieList = document.querySelector('#movie-list');
    
    try {
        const response = await fetch(API_URL);
        const movies = await response.json();
        
        renderGallery(movies, gallery);
        renderSidebar(movies, movieList);
    }
    catch (error) {
        console.error('Hiba az adatok lekérésekor:', error);
        gallery.innerHTML = '<p>Nem sikerült betölteni a galériát.</p>';
    }
}

function renderGallery(movies, gallery) {
    gallery.innerHTML = '';
    
    movies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = `movie-card-${index}`;

        const img = document.createElement('img');
        img.src = movie.image;
        img.alt = movie.title;
        img.loading = 'lazy';

        const info = document.createElement('div');
        info.className = 'movie-info';
        
        const title = document.createElement('h3');
        title.textContent = movie.title;

        const tagContainer = document.createElement('div');
        tagContainer.className = 'tag-container';

        if (movie.genre) {
            const genTag = document.createElement('span');
            genTag.className = 'tag';
            genTag.textContent = movie.genre;
            tagContainer.appendChild(genTag);
        }

        if (movie.age_rating) {
            const ageTag = document.createElement('span');
            ageTag.className = 'tag age';
            ageTag.textContent = `${movie.age_rating}+`;
            tagContainer.appendChild(ageTag);
        }

        // Elemek összerakása
        info.appendChild(title);
        info.appendChild(tagContainer);
        
        card.appendChild(img);
        card.appendChild(info);
        gallery.appendChild(card);
    });
}

function renderSidebar(movies, movieList) {
    if (!movieList) return;
    movieList.innerHTML = '';
    
    movies.forEach((movie, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#movie-card-${index}`;
        a.textContent = movie.title;
        li.appendChild(a);
        movieList.appendChild(li);
    });
}