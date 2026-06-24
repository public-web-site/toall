// メッセージ一覧
const messages = [
    "あなたはただここで存在しているだけで、十分価値のある人です。",
    "今日のあなたも、よく頑張りましたね。",
    "小さな一歩も、確実に前へ進んでいます。",
    "あなたの優しさが、誰かの笑顔につながっています。",
    "深呼吸して、今はゆっくりと休んでいいんですよ。",
    "どんな日にも、必ず次の良いことがあります。",
    "あなたを想う気持ちが、世界を優しくします。",
    "今日も一日、よく生き抜きましたね。",
    "あなたの笑顔は、誰かの力になります。",
    "ゆっくりでいいんです。あなたのペースで進んでください。",
    "星のように、あなたは輝いています。",
    "雨上がりの空には、必ず虹がかかります。",
    "あなたがいるだけで、世界は良くなります。",
    "疲れたときは、自分を褒めてあげてください。",
    "今日のあなたを、誰かがそっと応援しています。"
];

let currentIndex = 0;
const INTERVAL_MINUTES = 5; // 切り替え時間（分）- ここで変更可能

// メッセージを表示
function showMessage() {
    const messageEl = document.getElementById('message');
    messageEl.classList.add('fade-out');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        messageEl.textContent = messages[currentIndex];
        messageEl.classList.remove('fade-out');
    }, 800);
}

// 初期化
function init() {
    // ランダムなメッセージから開始
    currentIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[currentIndex];
    
    // 5分ごとにメッセージを切り替え
    setInterval(showMessage, INTERVAL_MINUTES * 60 * 1000);
}

document.addEventListener('DOMContentLoaded', init);

