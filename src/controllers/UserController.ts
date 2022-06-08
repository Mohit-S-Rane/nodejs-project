import { validationResult } from "express-validator";

export class UserController {
  static login(req, res, next) {
    const error = validationResult(req);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    if (!error.isEmpty()) {
      const newError = new Error(error.array()[0].msg);
      next(newError);
    }
  }
}
