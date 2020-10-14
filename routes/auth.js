const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { registerHandler } = require("../controllers/auth");

// register route
router.post(
  "/register",
  [
    check("name", "name field must be atleast 3 characers").isLength({
      min: 3,
    }),
    check("email", "email is not valid").isEmail(),
    check("password", "password must be atleast 8 characters long").isLength({
      min: 8,
    }),
  ],
  registerHandler
);

module.exports = router;
