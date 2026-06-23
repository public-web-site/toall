let messages = [];
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
       // メッセージを取得
     fetch('/api/messages')
           .then(response => response.json())
           .then(data => {
             messages = data.messages;
             if (messages.length > 0) {
                 currentIndex = Math.floor(Math.random() * messages.length);
                 document.getElementById('message').textContent = messages[currentIndex];
               }
           });
     
       // 5分ごとにメッセージを切り替え
     setInterval(showMessage, INTERVAL_MINUTES * 60 * 1000);
}

document.addEventListener('DOMContentLoaded', init);

