// console.log("test")

document.getElementById("test").addEventListener("click", function() {
    // this.classList.toggle("test2");
    const listElements = document.querySelectorAll(".list li");
    for (let i = 0; i < listElements.length; i++) {
        listElements[i].classList.toggle("test")
    }
});