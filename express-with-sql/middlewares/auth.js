const checkUserAuth = (req, res, next) => {
  //   console.log("req query:", req.query);
  console.log("inside middleware");
  if (req.query.auth === "youshallpass") {
    next();
  } else {
    res.status(401).send("you shall not pass!");
  }
};

module.exports = checkUserAuth;
