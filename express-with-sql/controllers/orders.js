/////////WICHTIG! Orders Routes vorher anpassen!
const getAllOrders = (req, res) => {
  res.send("GET all orders");
};

const getSingleOrder = (req, res) => {
  const { id } = req.params;
  res.send(`GET single order by id ${id}`);
};

module.exports = { getAllOrders, getSingleOrder };
