/* Değişken Tanımı */
const btn = document.getElementById("btn");
const container = document.getElementById("container");
/* Click Eventi */
btn.addEventListener("click", () => {
  createNotification();
});
/* Fonksiyon sağ  taraftan Mesaj bilgisi verir */
function createNotification() {
  const notif = document.createElement("div");

  notif.classList.add("mesaj");

  notif.innerText = " Sepete Eklendi !! ";

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
}
