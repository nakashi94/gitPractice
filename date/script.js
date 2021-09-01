const today = new Date(),
      days = ["日", "月", "火", "水", "木", "金", "土"];

let outputText = "今は";
outputText += "「" + today.getFullYear() + "年";
outputText += (today.getMonth() + 1) + "月";

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(days[today.getDay()]);
outputText += "」です";

document.getElementById("date").textContent = outputText;