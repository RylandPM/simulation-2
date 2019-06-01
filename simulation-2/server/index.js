require("dotenv").config();
const express = require("express");
const massive = require("massive");
const controller = require("./controller");

const app = express();
app.use(express.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("connected to db");
  })
  .catch(err => console.log(err));

app.get("/api/houses", controller.getHouses);
app.delete("/api/house", controller.deleteHouse);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on ${process.env.SERVER_PORT}`);
});
