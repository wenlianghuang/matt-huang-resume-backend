const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({ message: '來自 Express 的回應！' });
});

module.exports = router;
// 這裡的路由會被用於處理 API 請求，並返回 JSON 格式的數據。