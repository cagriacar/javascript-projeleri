/* Değişken Tanımı */
const toggle = document.getElementById("toggle");

/* toggle id'li input değiştiğin de dark moduna geçiyor */
toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});
