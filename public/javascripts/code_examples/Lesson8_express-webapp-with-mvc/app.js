const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const routes = require("./routes");

app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
