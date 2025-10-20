const demo = document.getElementById("demo");

let isImageDisplayed = false;
demo.addEventListener("mouseover", (event) => {
    if (!isImageDisplayed && event.target.id === "demo") {
        demo.innerHTML = "<image src = './img/kep.jpg' alt = 'kép'>";
        isImageDisplayed = true;
        }   
});

demo.addEventListener("mouseout", (event) => {
    if (isImageDisplayed && event.target.id === "demo") {
        demo.innerHTML = "<p>Hanyasra értékellek?</p>";
        isImageDisplayed = false;
        }   
});
          