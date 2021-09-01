const ran1 = Math.random();
// console.log(Math.floor(ran1*5+1));

document.getElementById("test").textContent = "今日のラッキーナンバーは" + Math.floor(ran1*5+1) + "です。";

const omikuji = ["daikiti", "kiti", "kyou"]
const ran2 = Math.floor(Math.random() * omikuji.length);

document.getElementById("omikuji").textContent = omikuji[ran2];