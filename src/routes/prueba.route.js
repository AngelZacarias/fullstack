//We set the routes using express
const express = require("express");
const { Router } = require("express");
const router = Router();
//const User = require("../models/User");

//We export the controller to get access to the methods by HTTP Request
const pruebaCtrl = require("../controllers/prueba.controller");

//We write the references to the methods
router.get("/", pruebaCtrl.getData);
router.post("/", pruebaCtrl.create);
router.put("/", pruebaCtrl.updateData);
router.delete("/", pruebaCtrl.deleteData);

module.exports = router;
