import express from "express";

const PORT = 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <a href="/result?param1=1&param2=2">Get Method Link</a>
    <form action="/result" method="POST">
      <input type="text" name="title" />
      </br>
      <input type="text" name="description" />
      <input type="submit" />
    </form>
  `);
});

app.get("/result", (req, res) => {
  const params = req.query;
  console.log(params);
});

app.post("/result", (req, res) => {
  const params = req.body;
  console.log(params);
});

app.listen(PORT, () => {
  console.log(`server start: localhost:${PORT}`);
});
