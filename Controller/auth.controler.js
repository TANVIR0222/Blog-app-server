import bcryptjs from "bcryptjs";
import { User } from "../Models/users.model.js";
import { errorHandler } from "../utils/error.js";

export const singup = async (req,res,next) => {
  //
  const { userName, email, password } = req.body;

  //   user fild using conditions extra p
  if (
    !userName ||
    !email ||
    !password ||
    userName === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400,'All fields are required'))
  }

  //   hash pass korar jono use kortaci
  const hashPassword = bcryptjs.hashSync(password, 10);

  // user data send data base
  const newUser = new User({
    userName,
    email,
    password: hashPassword,
  });

  //   using error not off server
  try {
    // user data save mongobd ms
    await newUser.save();
    res.json("singup successfull");
  } catch (error) {
    // error ms
    next(error);
  }
};
