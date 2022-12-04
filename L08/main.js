let Sounds = [("./assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"),
    ("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"),
    ("./assets/snare.mp3")];
let beat = [Sounds[5], Sounds[4], Sounds[8], Sounds[4],];
let zaehler = 0;
window.addEventListener("load", addClickListenersDrumPad);
function playSample(soundquelle) {
    let sound = new Audio(soundquelle);
    sound.play();
}
function playBeat() {
    setInterval(function () {
        playSample(beat[zaehler]);
        zaehler++;
        if (zaehler === 4) {
            zaehler = 0;
        }
    }, 350);
}
function addClickListenersDrumPad() {
    document.querySelector(".a").addEventListener("click", function () { playSample(Sounds[5]); });
    document.querySelector(".b").addEventListener("click", function () { playSample(Sounds[8]); });
    document.querySelector(".c").addEventListener("click", function () { playSample(Sounds[4]); });
    document.querySelector(".d").addEventListener("click", function () { playSample(Sounds[0]); });
    document.querySelector(".e").addEventListener("click", function () { playSample(Sounds[1]); });
    document.querySelector(".f").addEventListener("click", function () { playSample(Sounds[2]); });
    document.querySelector(".g").addEventListener("click", function () { playSample(Sounds[3]); });
    document.querySelector(".h").addEventListener("click", function () { playSample(Sounds[6]); });
    document.querySelector(".i").addEventListener("click", function () { playSample(Sounds[7]); });
    document.querySelector(".playb").addEventListener("click", function () { playBeat(); });
}
//# sourceMappingURL=main.js.map