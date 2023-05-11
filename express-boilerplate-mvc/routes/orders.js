const express = require("express");
const router = express.Router();

const { getAllOrders, getSingleOrder } = require("../controllers/orders");

router.route("/orders").get(getAllOrders);

router.route("/orders/:id").get(getSingleOrder);

module.exports = router;
