const db = require("../models/");

const User = db.users;

exports.createUser = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  console.log("Calling createUser API", req.body.firstName);
  // Validate request
  // Create a User
  const user = new User({
    userDetails :
    {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    userType: req.body.userType,
    status: req.body.status
  }});

  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.setHeader("Access-Control-Allow-Origin", "http://nktdc.vercel.app")
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Max-Age", 1800);
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      res.setHeader("Content-Type", "application/json");
      res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

      res.send(data);
    })
    .catch(err => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      } else {
        res.send("success");
      }
    });
}
