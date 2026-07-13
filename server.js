const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Загружаем HTML файл
  const filePath = path.join(__dirname, 'fitness_app_firebase.html');
  
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('Ошибка загрузки приложения');
      return;
    }

    res.writeHead(200, { 
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Приложение запущено на http://localhost:${PORT}`);
});
