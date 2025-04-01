const express = require('express');
const cors = require('cors'); // 引入 cors 中間件
const router = express.Router();

/*
// 配置 CORS，允許特定的來源
router.use(cors({
  origin: 'https://matt-huang-resume.vercel.app', // 替換為你的前端 URL
  methods: ['GET', 'POST'], // 允許的 HTTP 方法
  allowedHeaders: ['Content-Type', 'Authorization'], // 允許的標頭
}));

// middleware 1: Log the request time
router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
*/
router.get('/data', (req, res) => {
  res.json({ message: 'Acer 來自 Express 的回應！' });
});

module.exports = router;