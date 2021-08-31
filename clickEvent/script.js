let i = 0;

const testElem = document.getElementById("test").addEventListener("click", function() {
    alert("testがクリックされました")
    if (i % 3 == 0) {
        this.textContent = "テストがクリックされました";
    } else if (i % 3 == 1) {
        this.textContent = "testがクリックされました";
    } else {
        this.textContent = "testがclickされました";
    }
    console.log(i%3)
    i++;
});