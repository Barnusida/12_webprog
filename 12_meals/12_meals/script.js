const fetchBtn = document.getElementById("fetch");
const tarolo = document.getElementById("tarolo");

fetchBtn.addEventListener("click", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(data => {
            let htmlContent = "";

            data.categories.forEach(category => {
                htmlContent += `
                    <div class="card">
                        <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
                        <div class="card-title">Kategória: ${category.strCategory}</div>
                    </div>
                `;
            });

            tarolo.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error("Hiba történt:", error);
            tarolo.innerHTML = "<p>Hiba történt az adatok betöltésekor.</p>";
        });
});