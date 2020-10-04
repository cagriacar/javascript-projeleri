/* Id değişkenlere atama */
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");


/* Clik Eventi tetiklendiğinde toggle methodu "active" propertiesi etkin olur. */
btn.addEventListener("click", () => { 
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});
