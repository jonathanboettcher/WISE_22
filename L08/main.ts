let Sounds: string[] = [("./assets/A.mp3"),("./assets/C.mp3"),("./assets/F.mp3"),("./assets/G.mp3"),
("./assets/hihat.mp3"),("./assets/kick.mp3"),("./assets/laugh-1.mp3"),("./assets/laugh-2.mp3"),
("./assets/snare.mp3")];

let beat: string[] = [Sounds[5], Sounds[4], Sounds[8], Sounds[4],];

let zaehler: number = 0;

window.addEventListener("load" , addClickListenersDrumPad)

function playSample(soundquelle: string):void {
    let sound: HTMLAudioElement = new Audio(soundquelle);
    sound.play();
}

function playBeat(): void{
    setInterval(function(): void{
        playSample (beat[zaehler]);
        zaehler ++;
        if(zaehler === 4) {
            zaehler = 0;
        }
    }, 350)
}

function addClickListenersDrumPad():void{
    document.querySelector(".a").addEventListener("click", function(): void {playSample(Sounds[5]);});
    document.querySelector(".b").addEventListener("click", function(): void {playSample(Sounds[8]);});
    document.querySelector(".c").addEventListener("click", function(): void {playSample(Sounds[4]);});
    document.querySelector(".d").addEventListener("click", function(): void {playSample(Sounds[0]);});
    document.querySelector(".e").addEventListener("click", function(): void {playSample(Sounds[1]);});
    document.querySelector(".f").addEventListener("click", function(): void {playSample(Sounds[2]);});
    document.querySelector(".g").addEventListener("click", function(): void {playSample(Sounds[3]);});
    document.querySelector(".h").addEventListener("click", function(): void {playSample(Sounds[6]);});
    document.querySelector(".i").addEventListener("click", function(): void {playSample(Sounds[7]);});
    document.querySelector(".playb").addEventListener("click", function(): void {playBeat();});
}










