const ewdeutschland2021 = 83130000
const ewfrankreich2021 = 67500000
const ewitalien2021 = 59070000
const ewbelgien2021 = 11590000
const ewdeutschland2000 = 82210000
const ewfrankreich2000 = 60910000
const ewitalien2000 = 56940000
const ewbelgien2000 = 10250000
const eweu2022 = 446800000



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