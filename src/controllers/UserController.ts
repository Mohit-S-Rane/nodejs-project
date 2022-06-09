import { validationResult } from "express-validator";
import User from "../models/User";

export class UserController {
  static async signUp(req, res, next) {
    const error = validationResult(req);
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    if (!error.isEmpty()) {
      next(new Error(error.array()[0].msg));
    }

    const data = {
      email: email,
      password: password,
      username: username,
    };

    try {
      let user = await new User(data).save();
      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}
