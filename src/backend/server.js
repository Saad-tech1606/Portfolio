const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

const FILE = "data.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify({ visits: [] }));
}

app.post("/visit", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  data.visits.push({ time: new Date() });
  fs.writeFileSync(FILE, JSON.stringify(data));
  res.send({ ok: true });
});

app.listen(5000);