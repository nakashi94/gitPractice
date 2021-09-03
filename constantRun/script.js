let elapsedTime = 0;
document.getElementById("time").textContent = elapsedTime;

const timeId = setInterval(function() {
    elapsedTime++;
    document.getElementById("time").textContent = elapsedTime + "秒経過しました";
    if (elapsedTime == 5) {
        clearInterval(timeId);
    }
}, 1000)