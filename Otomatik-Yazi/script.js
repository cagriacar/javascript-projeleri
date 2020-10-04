const text = " Merhaba Arkadaşlar bu bir deneme yazısıdır.";

let index = 0;
/* Ekrana Metni otomatik yazacak fonksiyon */
function yaziYaz() {
  document.body.innerText = text.slice(0, index);
  index++;

  if (index > text.length - 1) {
    index = 0;
  }
}
/* js fonksiyonudur.Oluşturduğumuz fonksiyonu verdiğimiz zamana göre çağırır */
setInterval (yaziYaz,100);