const pool = require("../db");

const getAllUsers = async (req, res) => {
  try {
    //Template:  const result = await pool.query("");
    const { rows: data } = await pool.query("SELECT * FROM users");
    //{rows: data} => rows Property destrukturieren und als "data" benennen ODER .json(data.rows)
    res.status(200).json(data); // hier definieren wir unsere Response
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      rows: [user], //rows Property destrukturiert & Array destrukturiert
    } = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    //alternativ: const user = await pool.query(...)
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  }
};

const createNewUser = async (req, res) => {
  //check if user already exists
  try {
    // console.log(req.body);
    const { name, email, password } = req.body; //Daten aus req.body destrukturieren
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;",
      [name, email, password]
    );
    res.status(201).send(`User ${name} has been created`);
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const updatedUser = await pool.query(
      "UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4 RETURNING *;",
      [name, email, password, id]
    );
    // res.status(200).send(`Changes for user ${name}`);
    // res.status(200).send(`Wir haben einen neuen Timmy!`);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await pool.query(
      "DELETE FROM users WHERE id=$1 RETURNING *;",
      [id]
    );
    res.status(200).send(`User with the id ${id} has been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
};
