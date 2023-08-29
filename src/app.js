const express = require("express");
const app = express();
const router = express.Router();
//Rotas
const index = require("../routes/index");
const personRoute = require("../routes/personRoute");
app.use("/", index);
app.use("/persons", personRoute);
module.exports = app;
const express = require("express");
newFunction();
//Rotas
const index = require("../routes/index");
const personRoute = require("../routes/personRoute");
app.use("/", index);
app.use("/persons", personRoute);
module.exports = app;
function newFunction() {
  const app = express();
  const router = express.Router();
}
