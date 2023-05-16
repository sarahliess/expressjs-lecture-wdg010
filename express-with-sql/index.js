require("dotenv").config(); // require & enab le .env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

//parsing middlewares:
app.use(express.urlencoded({ extended: true })); //parst req aus HTML Formular
app.use(express.json()); //parst req aus NICHT-HTML Formularen (zB Postman)

//allow CORS
app.use(cors());

//importing all routes:
const usersRouter = require("./routes/users");
const ordersRouter = require("./routes/orders");

//"Inhaltsverzeichnis" => wir hängen unsere Routes an den Initial-Endpunkt an
app.use("/", usersRouter, ordersRouter);

app.get("/", (req, res) => res.send("My first API using ElephantSQL"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
