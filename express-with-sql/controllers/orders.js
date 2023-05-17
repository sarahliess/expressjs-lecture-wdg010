/////////WICHTIG! Orders Routes vorher anpassen!

const pool = require("../db");


//ALL
const getAllOrders = async (req, res) => {
  try {
    //Template:  const result = await pool.query("");
    const { rows: data } = await pool.query("SELECT * FROM orders");
    //{rows: data} => rows Property destrukturieren und als "data" benennen ODER .json(data.rows)
    res.status(200).json(data); // hier definieren wir unsere Response
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  }
};




const createOrder = async (req, res) => {
  //check if user already exists
  try {
    // console.log(req.body);
    const { price, user_id } = req.body; //Daten aus req.body destrukturieren
    const newUser = await pool.query(
      "INSERT INTO users (price, user_id) VALUES ($1, $2) RETURNING *;",
      [price, user_id]
    );
    res.status(201).send(`Order has been created`);
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  };
}


//ID

const getSingleOrder = async (req, res) => {
  const { id } = req.params;
try {
  const {rows: [order]
  } = await pool.query("SELECT * FROM orders WHERE id =$1", [id]);
  res.status(200).json(order);
} catch(err) {
  console.log(err);
  res.status(404).send("Something went wrong");
}
};



const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { price, user_id } = req.body;
  try {
    const updatedOrder = await pool.query(
      "UPDATE orders SET price=$1, user_id=$2 WHERE id=$3 RETURNING *;",
      [price, user_id, id]
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  }
};


const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await pool.query(
      "DELETE FROM users WHERE id=$1 RETURNING*", 
      [id]
      );
      res.status(200).send(`Order with the id ${id} has been deleted.`);
  } catch(err) {
    console.log(err);
    res.status(404).send("Something went wrong")
  }
};


module.exports = { getAllOrders, createOrder, getSingleOrder, updateOrder, deleteOrder }
