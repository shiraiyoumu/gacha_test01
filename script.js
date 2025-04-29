const menu = [
    { menu: "シュラスコMIXイチボプレート",price: 1600 ,shop:"Bear's kitchen" },
    { menu: "国産牛100%!!武骨BEEFハンバーグ BENTO", price:1400 ,shop:"BULL`S" },
    { menu: "チャンピオン弁当", price:1700 ,shop:"北海道ジンギスカン Lamb`z" },
    { menu: "温玉とり天丼", price:950 ,shop:"いちや" },
    // // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },
    // { name: "", price: ,shop:"" },

];

const button = document.getElementById("gacha-button");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function() {
    let selectedItems = [];
    let total = 0;
    const target = 3000;
    const tolerance = 3000;

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
        let html = "<h2>ガチャ結果🎯</h2><ul>";
        selectedItems.forEach(item => {
            html += `<li>
                メニュー名：${item.menu}<br>
                店舗名：${item.shop}<br>
                金額：${item.price}円
            </li><br>`;
        });
        html += `</ul><p>合計金額：${total}円</p>`;
        resultDiv.innerHTML = html;
    }
});