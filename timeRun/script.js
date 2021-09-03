function test() {
    console.log("test");
}

document.getElementById("test").addEventListener("click", function() {
    document.getElementById("contents").style.display = "block";
})

// setTimeout(test, 1000);

// console.log("test");
// setTimeout(function() {
   //  console.log("test2");
    // setTimeout(function() {
       //  console.log("test3");
    // }, 3000)
// }, 3000)