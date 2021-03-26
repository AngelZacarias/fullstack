//New controller
const pruebaCtrl = {};
const User = require("../models/user");

//Methods
pruebaCtrl.getData = (req, res) => {
  User.find()
  .then(users=>{
    res.json({users})
  })
  .catch(err=>{
    console.log(err)
  })
};

pruebaCtrl.create = async (req, res) => {
  const { name, lastName, salary } = req.body;
  const newRegister = new User({
    name,
    lastName,
    salary,
  });
  await newRegister.save();
  res.json({
    message: "Employee saved",
  });
  res.send("created");
};

pruebaCtrl.updateData = (req, res) => {
  res.send("updated");
};

pruebaCtrl.deleteData = (requ, res) => {
  res.send("deleted xd");
};

module.exports = pruebaCtrl;
