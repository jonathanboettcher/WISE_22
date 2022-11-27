const ewdeutschland2021 = 83130000
const ewfrankreich2021 = 67500000
const ewitalien2021 = 59070000
const ewbelgien2021 = 11590000
const ewdeutschland2000 = 82210000
const ewfrankreich2000 = 60910000
const ewitalien2000 = 56940000
const ewbelgien2000 = 10250000
const eweu2022 = 446800000
const eweu2000 = 428470000

const gm21 = String(ewdeutschland2021/1000000 + " Mio")
const gm00 = String(ewdeutschland2000)
const fr21 = String(ewfrankreich2021/1000000 + " Mio")
const fr00 = String(ewfrankreich2000)
const it21 = String(ewitalien2021/1000000 + " Mio")
const it00 = String(ewitalien2000)
const bg21 = String(ewbelgien2021/1000000 + " Mio")
const bg00 = String(ewbelgien2000)
const eu22 = String(eweu2022/1000000 + " Mio")
const eu00 = String(eweu2000)

const wrgmrel1 = (( (ewdeutschland2021 / ewdeutschland2000 - 1 )*100))
const wrgmges = String((ewdeutschland2021 - ewdeutschland2000) / 1000 + ".000")
const wrgmrel = String(wrgmrel1.toFixed(2))
const gmeu1 = ((ewdeutschland2021/(eweu2022/100)))
const gmeu = String(gmeu1.toFixed(2))

const wrfrrel1 = (( (ewfrankreich2021 / ewfrankreich2000- 1 )*100))
const wrfrrel = String(wrfrrel1.toFixed(2))
const wrfrges = String((ewfrankreich2021 - ewfrankreich2000) / 1000000 +" Mio")
const freu1 = ((ewfrankreich2021/(eweu2022/100)))
const freu = String(freu1.toFixed(2))

const writrel1 = (( (ewitalien2021 / ewitalien2000 - 1 )*100))
const writrel = String(writrel1.toFixed(2))
const writges = String((ewitalien2021 - ewitalien2000) / 1000000 + " Mio")
const iteu1 = ((ewitalien2021/(eweu2022/100)))
const iteu = String(iteu1.toFixed(2))

const wrbgrel1 = (( (ewbelgien2021 / ewbelgien2000 - 1 )*100))
const wrbgrel = String(wrbgrel1.toFixed(2))
const wrbgges = String((ewbelgien2021 - ewbelgien2000) / 1000000 + " Mio")
const bgeu1 = ((ewbelgien2021/(eweu2022/100)))
const bgeu = String(bgeu1.toFixed(2))

const wreurel1 = (( (eweu2022 / eweu2000 - 1 )*100))
const wreurel = String(wreurel1.toFixed(2))
const wreuges = String((eweu2022 - eweu2000) / 1000000 + " Mio")
const eu1 = ((eweu2022/(eweu2022/100)))
const eurel = String(eu1.toFixed(2))



console.log("In Deutschland wohnen in 2021 "+ ewdeutschland2021 +" Einwohner");
console.log("das sind " + (ewdeutschland2021 - ewdeutschland2000) + " mehr als in 2000" + " ( " + ewdeutschland2000 + " )")
console.log("Die Wachstumsrate beträgt damit:" + ( (ewdeutschland2021 / ewdeutschland2000 - 1 )*100) + "%")
console.log("Also wohnen " + (ewdeutschland2021/(eweu2022/100)) + "% der gesamten EU Bevölkerung in Deutschland")

console.log("In Frankreich wohnen in 2021 "+ ewfrankreich2021 +" Einwohner");
console.log("das sind " + (ewdeutschland2021 - ewfrankreich2000) + " mehr als in 2000" + " ( " + ewfrankreich2000 + " )")
console.log("Die Wachstumsrate beträgt damit:" + ( (ewfrankreich2021 / ewfrankreich2000 - 1 )*100) + "%")
console.log("Also wohnen " + (ewfrankreich2021/(eweu2022/100)) + "% der gesamten EU Bevölkerung in Frankreich")

console.log("In Italien wohnen in 2021 "+ ewitalien2021 +" Einwohner");
console.log("das sind " + (ewitalien2021 - ewitalien2000) + " mehr als in 2000" + " ( " + ewitalien2000 + " )")
console.log("Die Wachstumsrate beträgt damit:" + ( (ewitalien2021 / ewitalien2000 - 1 )*100) + "%")
console.log("Also wohnen " + (ewitalien2021/(eweu2022/100)) + "% der gesamten EU Bevölkerung in Italien")

console.log("In Belgien wohnen in 2021 "+ ewbelgien2021 +" Einwohner");
console.log("das sind " + (ewbelgien2021 - ewbelgien2000) + " mehr als in 2000" + " ( " + ewbelgien2000 + " )")
console.log("Die Wachstumsrate beträgt damit:" + ( (ewbelgien2021 / ewbelgien2000 - 1 )*100) + "%")
console.log("Also wohnen " + (ewbelgien2021/(eweu2022/100)) + "% der gesamten EU Bevölkerung in Belgien")


function deutschland() {
    document.querySelector("#ewges").innerHTML = gm21
    document.querySelector("#releu").innerHTML = gmeu + " %"
    document.querySelector("#wrrel").innerHTML = wrgmrel + " %"
    document.querySelector("#wrges").innerHTML = wrgmges
    document.querySelector("#land").innerHTML = " Deutschland "
    document.querySelector(".chart").setAttribute('style' , 'height:' + gmeu + '%');
   
}
document.querySelector(".germany").addEventListener("click", deutschland)

function frankreich() {
    document.querySelector("#ewges").innerHTML = fr21
    document.querySelector("#releu").innerHTML = freu + " %"
    document.querySelector("#wrrel").innerHTML = wrfrrel + " %"
    document.querySelector("#wrges").innerHTML = wrfrges
    document.querySelector("#land").innerHTML = " Frankreich "
    document.querySelector(".chart").setAttribute('style' , 'height:' + freu + '%');
   
}
document.querySelector(".france").addEventListener("click", frankreich)

function italien() {
   
    document.querySelector("#ewges").innerHTML = it21
    document.querySelector("#releu").innerHTML = iteu + " %"
    document.querySelector("#wrrel").innerHTML = writrel + " %"
    document.querySelector("#wrges").innerHTML = writges
    document.querySelector("#land").innerHTML = " Italien "
    document.querySelector(".chart").setAttribute('style' , 'height:' + iteu + '%');
   
}
document.querySelector(".italy").addEventListener("click", italien)

function belgien() {
    document.querySelector("#ewges").innerHTML = bg21
    document.querySelector("#releu").innerHTML = bgeu + " %"
    document.querySelector("#wrrel").innerHTML = wrbgrel + " %"
    document.querySelector("#wrges").innerHTML = wrbgges
    document.querySelector("#land").innerHTML = " Belgien "
    document.querySelector(".chart").setAttribute('style' , 'height:' + bgeu + '%');
}
document.querySelector(".belgium").addEventListener("click", belgien)

function eu() {
    document.querySelector("#ewges").innerHTML = eu22
    document.querySelector("#releu").innerHTML = eurel + " %"
    document.querySelector("#wrrel").innerHTML = wreurel + " %"
    document.querySelector("#wrges").innerHTML = wreuges
    document.querySelector("#land").innerHTML = " der EU "
    document.querySelector(".chart").setAttribute('style' , 'height:' + eurel + '%')
}
document.querySelector(".stars").addEventListener("click" , eu)
