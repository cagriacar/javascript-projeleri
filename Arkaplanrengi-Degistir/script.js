const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.background = rastgeleBg();
});
/* Rengi belirlediğimiz fonksiyon */
function rastgeleBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
