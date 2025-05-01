const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 4000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.VITE_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.VITE_GITHUB_CLIENT_SECRET;

app.post("/auth/github", async (req, res) => {
  const { code } = req.body;
  try {
    const response = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error("Ошибка при обмене code на access_token", err);
    res.status(500).json({ error: "Ошибка авторизации" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}`);
});
