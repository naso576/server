const db = require("../models/");

const User = db.users;

exports.createUser = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    id: req.body.id,
    userType: req.body.userType,
    status: req.body.status
  });

  // Save User in the database
  user
    .save(user)
    .then(data => {
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