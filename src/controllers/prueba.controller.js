//New controller
const pruebaCtrl = {};

//Methods
pruebaCtrl.getData = (req, res) => {
  res.send("working");
};

pruebaCtrl.create = (req, res) => {
  res.send("created");
};

pruebaCtrl.updateData = (req, res) => {
  res.send("updated");
};

pruebaCtrl.deleteData = (requ, res) => {
  res.send("deleted");
};

module.exports = pruebaCtrl;
