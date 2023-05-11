const express = require("express");
const app = express();
const PORT = process.env.POPRT || 8080;

app
  .route("/")
  .get((req, res) => {
    res.send("Kakadu");
    console.log("is this really kakadu?");
  })
  .post((req, res) => res.send("We POST a resource"))
  .put((req, res) => res.send("We PUT a resource"))
  .delete((req, res) => res.send("We DELETE a resource"));

app
  .route("/users")
  .get((req, res) => res.send("GET all users"))
  .post((req, res) => res.send("CREATE a new user"));

app
  .route("/users/:id")
  .get((req, res) => {
    console.log(req.params.id);
    const { id } = req.params;
    res.send(`GET single user by id ${id}`);
  })
  .put((req, res) => res.send("UPDATE one user by id"))
  .delete((req, res) => res.send("DELETE one user by id"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
