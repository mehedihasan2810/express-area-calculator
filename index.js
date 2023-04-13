const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/circle/area", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h2>area of circle ${area}<h2/>`);
});
app.post("/triangle/area", (req, res) => {
  const { base, height } = req.body;
  const area = 0.5 * base * height;
  res.send(`<h2>area of triangle ${area}</h2>`);
});

app.listen(PORT, () => {
  console.log(`server in running at http://localhost:${PORT}`);
});
