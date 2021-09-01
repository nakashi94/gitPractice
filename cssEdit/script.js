document.getElementById("box").style.width = "300px"
document.getElementById("box").style.height = "300px"

document.getElementById("box").style.width = ""

document.getElementById("box").style.cssText = "width: 300px; font-size: 40px;"

document.getElementById("box").style.backgroundColor = "#555"

console.log(document.getElementById("box").style.width)

console.log(window.getComputedStyle(document.getElementById("box")).alignItems)
