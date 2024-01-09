const { User } = require("../models/Usermodel");
const bcrypt = require("bcrypt");

const userController = (req, res) => {
  res.send("user page");
};

const detailsuserController = (req, res) => {
  res.send("details user page");
};

const createUserController = async (req, res) => {
  const { email, password, name } = req.body;
  if (email && password && name) {
    try {
      if (email && password && name) {
        const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
        if (isEmail) {
          const isCheckEmail = await User.find({ email: email });
          const isCheckName = await User.find({ name: name });
          if (isCheckEmail.length || isCheckName.length) {
            return res.json({
              status: "err",
              message: "The name or user name is existed",
            });
          }
          const hashPassword = bcrypt.hashSync(password, 10);
          console.log("hashPassword", hashPassword);
          const newUser = await User.create({
            email,
            name,
            password: hashPassword,
          });
          return res.json({
            status: "OK",
            data: newUser,
          });
        } else {
          return res.json({
            status: "err",
            message: "user name is not a email",
          });
        }
      } else {
        return res.json({
          status: "err",
          message: "the email password and name is required",
        });
      }
    } catch (err) {
      console.log(err);
      return res.json({
        status: "err",
        message: err,
      });
    }
  }
};

module.exports = {
  userController,
  detailsuserController,
  createUserController,
};
