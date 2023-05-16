const express = require("express");
const router = express.Router();

const { getAllOrders, getSingleOrder } = require("../controllers/orders");

router.route("/orders").get(getAllOrders).post();

router.route("/orders/:id").get(getSingleOrder).put().delete();

module.exports = router;
