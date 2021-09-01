const item = {
    name: "パソコン",
    price: 100000,
    sale: true,
    parts: ["CPU", "メモリ", "SSD"],
    a: {
        b: "テスト"
    }
}

item["c"] = "test2";
item["price"] = 200000;

document.getElementById("name").textContent = "商品名は" + item.name;
document.getElementById("price").textContent = "値段は" + item.price + "円";

if (item.sale) {
    document.getElementById("sale").textContent = "セール中です";
}

let texts = "";
for (let i = 0; i < item["parts"].length; i++) {
    texts += item["parts"][i] + "・";
}

document.getElementById("parts").textContent = item["name"] + "のパーツは" + texts + "です";

document.getElementById("test").textContent = item["a"]["b"];

document.getElementById("test2").textContent = item["c"];

console.table(item);
