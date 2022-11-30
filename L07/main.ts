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



function generator(ew21:number, ew00:number, land:string) {
    
    const wrrel1 = (( (ew21 / ew00 - 1 )*100))
    const wrrel = String(wrrel1.toFixed(2))
    const wrges = String((ew21 - ew00) / 1000000 + " Mio")
    const eu1 = ((ew21/(eweu2022/100)))
    const eurel = String(eu1.toFixed(2))
    const ew = String(ew21/1000000 + " Mio") 
    
    document.querySelector("#ewges").innerHTML = ew
    document.querySelector("#releu").innerHTML = eurel + " %"
    document.querySelector("#wrrel").innerHTML = wrrel + " %"
    document.querySelector("#wrges").innerHTML = wrges
    document.querySelector("#land").innerHTML = land
    document.querySelector(".chart").setAttribute('style' , 'height:' + eurel + '%')
}

function genger(){
    generator(ewdeutschland2021, ewdeutschland2000, " Deutschland ")
}
function genfr(){
    generator(ewfrankreich2021, ewfrankreich2000, " Frankreich ")
}
function genit(){
    generator(ewitalien2021, ewitalien2000, " Italien ")
}
function genbg(){
    generator(ewbelgien2021, ewbelgien2000, " Belgien ")
}
function geneu(){
    generator(eweu2022, eweu2000, " der EU ")
}

document.querySelector(".germany").addEventListener("click",genger)
document.querySelector(".france").addEventListener("click",genfr)
document.querySelector(".italy").addEventListener("click",genit)
document.querySelector(".belgium").addEventListener("click",genbg)
document.querySelector(".stars").addEventListener("click",geneu)


