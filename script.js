const menu = [
    { menu: "シュラスコMIXイチボプレート",price: 1600 ,shop:"Bear's kitchen" },
    { menu: "国産牛100%!!武骨BEEFハンバーグ BENTO", price:1400 ,shop:"BULL`S" },
    { menu: "チャンピオン弁当", price:1700 ,shop:"北海道ジンギスカン Lamb`z" },
    { menu: "温玉とり天丼", price:950 ,shop:"いちや" },
    { menu: "ハブコロール", price:700 ,shop:"HUB" },
    { menu: "ストロベリーバブルワッフル", price:950 ,shop:"ベリーズベリー" },
    { menu: "松坂牛ローストビーフ丼", price:1800 ,shop:"極みフーズ" },
    { menu: "チーズタコライス", price:1500 ,shop:"Hungry Drive 1991" },
    { menu: "ケバブサンド", price:800 ,shop:"カッパドキアキッチン" },
    { menu: "相模豚ミックス丼", price:1400 ,shop:"炭火焼我が家のとん丼や" },
    { menu: "スペシャリティコーヒー", price:600 ,shop:"WEEKEND" },
    { menu: "燻製バターのカヌレ", price:700 ,shop:"燻製キッチンKEMUMAKI・KUN" },
    // { menu: "", price: ,shop:"" },
    // { menu: "", price: ,shop:"" },
    // { menu: "", price: ,shop:"" },
    // { menu: "", price: ,shop:"" },
    // { menu: "", price: ,shop:"" },
    // { menu: "", price: ,shop:"" },
    // { menu: "", price: ,shop:"" },
    // { menu: "", price: ,shop:"" },



];

const button = document.getElementById("gacha-button");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function() {
    let selectedItems = [];
    let total = 0;
    const target = 3000;
    const tolerance = 1000;

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