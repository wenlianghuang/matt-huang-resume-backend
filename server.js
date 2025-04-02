const express = require("express");
const cors = require("cors");
const apiRouter = require("./src/routes/api"); // 引入 API 路由
const app = express();
//app.use(cors({ origin: "https://matt-huang-resume.vercel.app" })); // 允許 Next.js 前端訪問
app.use(cors({
  origin: 'https://matt-huang-resume.vercel.app', // 替換為你的前端 URL
  methods: ['GET', 'POST','PUT','DELETE'], // 允許的 HTTP 方法
  allowedHeaders: ['Content-Type', 'Authorization'], // 允許的標頭
}));
app.use(express.json()); // 解析 JSON 請求主體
/*
app.get("/api/data", (req, res) => {
  res.json({ message: "來自 Express 的回應！" });
});
*/
// 使用 JSON 解析中介軟體
app.use("/api", apiRouter); // 使用 API 路由

// Vercel 使用 PORT 3000 可能無效，改成 process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
