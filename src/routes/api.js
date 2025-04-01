const express = require('express');
const cors = require('cors'); // 引入 cors 中間件
const router = express.Router();


// 配置 CORS，允許特定的來源
router.use(cors({
  origin: 'https://matt-huang-resume.vercel.app', // 替換為你的前端 URL
  methods: ['GET', 'POST'], // 允許的 HTTP 方法
  allowedHeaders: ['Content-Type', 'Authorization'], // 允許的標頭
}));

// middleware 1: Log the request time
router.use((req, res, next) => {
  //console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url}`;
  console.log(logMessage);
  res.locals.logMessage = logMessage; // 將日誌消息存儲在 res.locals 中，以便在後續中間件中使用
  next();
});

router.get('/data', (req, res) => {
  res.json({ 
    message: 'Acer 來自 Express 的回應！',
    log: res.locals.logMessage // 返回日誌消息 
  });
});

module.exports = router;