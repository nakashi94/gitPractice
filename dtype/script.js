let input = document.getElementById("input").textContent;

console.log(input);
console.log(typeof(input));
input = Number(input);
console.log(input);
console.log(typeof(input));
document.getElementById("output").textContent = input + 1000 + "です";

