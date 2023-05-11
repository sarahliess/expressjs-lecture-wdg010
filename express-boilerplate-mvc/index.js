const express = require("express");
const app = express();
const PORT = process.env.POPRT || 8080;

//importing all routes:
const usersRouter = require("./routes/users");
const ordersRouter = require("./routes/orders");

//"Inhaltsverzeichnis" => wir hängen unsere Routes an den Initial-Endpunkt an
app.use("/", usersRouter, ordersRouter);

app.get("/", (req, res) =>
  res.send("My first API. You can use the endpoints /users and /users/:id")
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
