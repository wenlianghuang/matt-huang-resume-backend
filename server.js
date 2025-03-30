const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "https://matt-huang-resume.vercel.app/" })); // 允許 Next.js 前端訪問

app.get("/api/data", (req, res) => {
  res.json({ message: "來自 Express 的回應！" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
