//We set the routes using express
const { Router } = require("express");
const route = Router();

//We export the controller to get access to the methods by HTTP Request
const pruebaCtrl = require("../controllers/prueba.controller");

//We write the references to the methods
route.get("/", pruebaCtrl.getData);
route.post("/", pruebaCtrl.create);
route.put("/", pruebaCtrl.updateData);
route.delete("/", pruebaCtrl.deleteData);
module.exports = route;
