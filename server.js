const express = require("express");
const cors = require("cors");
const apiRouter = require("./src/routes/api"); // 引入 API 路由
const app = express();
app.use(cors({ origin: "https://matt-huang-resume.vercel.app" })); // 允許 Next.js 前端訪問

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
