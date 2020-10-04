/* Kalpleri rastgele oluşturan fonksiyon */

function kalpOlustur() {
  const kalp = document.createElement("div");
  kalp.classList.add("kalp");
  kalp.style.left = Math.random() * 100 + "vw";
  kalp.style.animationDuration = Math.random() * 2 + 3 + "s";

  kalp.innerText = "💜";

  document.body.appendChild(kalp);
  setTimeout(() => {
      kalp.remove();
  },5000);
}
/* Javascript fonksiyonu oluşturduğumuz fonksiyonu belirtiği zamana göre çağırır */
setInterval(kalpOlustur, 200);
