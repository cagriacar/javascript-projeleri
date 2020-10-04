/* Değişken Tanımı */
const mesaj = document.getElementById("mesaj");
const kapat = document.getElementById("kapat");
const container = document.getElementById("container");
/* Butona Click olduğunda modal active class eklenip-silinmesi */
mesaj.addEventListener("click", () => {
    container.classList.add("active");
});
kapat.addEventListener("click", () => {
    container.classList.remove("active");
});