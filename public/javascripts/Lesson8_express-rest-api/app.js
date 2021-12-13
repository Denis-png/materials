const express = require("express");
/* const bodyParser = require("body-parser"); */

const app = express(); //name doesn't really matter, you can call it whatever you want. Developers just usually call it either app or server
//MIDDLEWARE
app.use(express.json());

const games = [
  {
    id: 1,
    name: "Mafia: Definitive Edition",
    platforms: ["PS4", "Xbox One", "Microsoft Windows"],
  },
  {
    id: 2,
    name: "God of War",
    platforms: ["PS4"],
  },
];

const generateID = (array) => {
  const maxIDObject = array.reduce((currMaxVal, currVal) => {
    if (currVal.id > currMaxVal.id) return currVal;
    else return currMaxVal;
  });
  return maxIDObject.id + 1;
};

//ROUTES
app.get("/games", (req, res) => {
  res.send(games);
  //res.send("Hello from the express NodeJS server");
});

app.post("/games", (req, res) => {
  games.push({ id: generateID(games), ...req.body });
  res.send(games);
});

const port = 3000;
//starts listening
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
