const demo = document.getElementById("demo");
const area = document.getElementById("area");

area.addEventListener("keyup", () => {
    // let star = "";

    // for (let i = 0; i < area.value.length; i++) {
    //     star += "*";
    // }

    // demo.textContent = star;

    demo.textContent = "*".repeat(area.value.length);
    
});