import { validationResult } from "express-validator";
import User from "../models/User";

export class UserController {
  static signUp(req, res, next) {
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
      username: username
    };

    let user = new User(data);
    user.save().then((user)=> {
      res.send(user);
    }).catch(err=>{
      next(err);
    }) 
     
  }
}
