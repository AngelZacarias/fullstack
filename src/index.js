const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./database");

//Port we are using to deploy the site
app.set("Port", 4000);

//It will be used to get data about the request made and duration
app.use(morgan("dev"));

//app.use(bodyParser.urlencoded({extend:true}));
//app.use(bodyParser.json());

//:::::::::::::::::::::: Routes ::::::::::::::::::::
app.use("/api/", require("./routes/prueba.route"));

//::::::::::::::::::::Start Server :::::::::::::::::
app.listen(app.get("Port"), () => {
  console.log("listning in ", app.get("Port"));
});
