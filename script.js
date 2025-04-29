const menu = [
    { name: "ミラノ風ドリア", price: 300 },
    { name: "小エビのサラダ", price: 350 },
    { name: "辛味チキン", price: 300 },
    { name: "マルゲリータピザ", price: 500 },
    { name: "ティラミス", price: 300 },
    { name: "グラスワイン赤", price: 100 },
    // 他にも自由に追加してOK
];

const button = document.getElementById("gacha-button");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function() {
    let selectedItems = [];
    let total = 0;
    const target = 1000;
    const tolerance = 100;

    let shuffledMenu = [...menu].sort(() => 0.5 - Math.random());

    for (let item of shuffledMenu) {
        if (total + item.price <= target + tolerance) {
            selectedItems.push(item);
            total += item.price;
        }
        if (total >= target - tolerance) {
            break;
        }
    }

    if (selectedItems.length === 0) {
        resultDiv.innerHTML = "ガチャ失敗！もう一回！";
    } else {
        let html = "<h2>ガチャ結果🎉</h2><ul>";
        selectedItems.forEach(item => {
            html += `<li>${item.name}：${item.price}円</li>`;
        });
        html += `</ul><p>合計金額：${total}円</p>`;
        resultDiv.innerHTML = html;
    }
});