//Mongoose to manage the database conection
const mongoose = require("mongoose");
//URI to db, created if it doesnt exist
URI = "mongodb://localhost/registro_empleados";

//We  try to connect
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("database connected"))
  .catch((error) => console.log(error));

module.exports = mongoose;
