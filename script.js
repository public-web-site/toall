// 初期化
function init() {
     // GitHub Pages（静的環境）用にパスを修正
     fetch('messages.json') 
           .then(response => {
               if (!response.ok) {
                   throw new Error('ファイルの読み込みに失敗しました');
               }
               return response.json();
           })
           .then(data => {
             messages = data.messages;
             if (messages && messages.length > 0) {
                 currentIndex = Math.floor(Math.random() * messages.length);
                 document.getElementById('message').textContent = messages[currentIndex];
             }
           })
           .catch(error => {
               console.error('エラーが発生しました:', error);
           });
     
       // 5分ごとにメッセージを切り替え
     setInterval(showMessage, INTERVAL_MINUTES * 60 * 1000);
}