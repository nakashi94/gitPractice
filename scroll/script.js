window.addEventListener("scroll", function() {
    // console.log("scroll");
    let scroll = document.documentElement.scrollTop;
    document.getElementById("scrollValue").textContent = Math.floor(scroll);

    if (scroll > 300) {
        document.querySelector("main").classList.add("test");
    } else {
        document.querySelector("main").classList.remove("test");
    }
});