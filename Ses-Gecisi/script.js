const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
/*  Dizideki değerleri buton olarak dönen ve butona tıkladığı zaman tıklanan butonun adı ile id si eşit olan ses çalıyor. */
sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});
/* buton geçişinde sesler kaçışmasın diye ses durdurma işlemi */
function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}
