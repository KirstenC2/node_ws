module.exports = function (ws) {
  console.log('🟢 Client connected');

  // 傳送訊息給 client
  ws.send('👋 Welcome to the server!');

  // 接收 client 訊息
  ws.on('message', (msg) => {
    console.log('📩 Received from client:', msg);

    // 回覆 client
    ws.send('📝 Server received: ' + msg);
  });

  // 客戶端離線
  ws.on('close', () => {
    console.log('🔴 Client disconnected');
  });
};
