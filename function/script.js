const tax = 1.1;

function insertText(itemPrice, element) {
    function calculation(price) {
        return Math.floor(price * tax);
    }

    document.getElementById(element).textContent = itemPrice + "円の商品の税込み" + calculation(itemPrice) + "円です" 
}

insertText(100, "result");
insertText(200, "result2");
insertText(300, "result3");
