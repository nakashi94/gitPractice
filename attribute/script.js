document.querySelectorAll("ul li a").forEach(element => {
    element.setAttribute("target", "_blank")
    console.log(element.getAttribute("target"))
    console.log(element.hasAttribute("target"))
})