// function tax(number) {
   //  return number * 1.1;
// }

// const tax = function(number) {
    // return number * 1.1;
// }

// const tax = (number) => {
    // return number * 1.1;
// }

const tax = number => number*1.1

// const tax = () => 100*1.1

document.getElementById("test").textContent = "テスト";

// document.getElementById("test").addEventListener("click", function() {
    // this.textContent = "クリックされました";
// })

document.getElementById("test").addEventListener("click", () => {
    setTimeout(function() {
        alert("test")
    }, 1000)
    this.textContent = "クリックされました";
})