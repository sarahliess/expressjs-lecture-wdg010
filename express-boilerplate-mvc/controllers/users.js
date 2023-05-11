const getAllUsers = (req, res) => {
  //insert magic code here:
  //const users = mymagicSQLCode
  //const users = mymagicNoSQLCode 
  //res.json(users)
  res.send("GET all users");
};

const getSingleUser = (req, res) => {
  const { id } = req.params;
  res.send(`GET single user by id ${id}`);
};

const createNewUser = (req, res) => {
  res.send("CREATE new user");
};

const updateUser = (req, res) => {
  const { id } = req.params;

  res.send(`UPDATE single user by id ${id}`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  res.send(`DELETE single user by id ${id}`);
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
};
