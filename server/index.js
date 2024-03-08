import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World test2!');
// });

app.use(express.static(path.join(__dirname, "..", "dist")));

app.use((req, res, next) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
