import User from "../models/User";

export class UserController {
  static login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({ email: email, password: password });
    user.save().then((User)=>{
      res.send(user);
    }).catch(err=>{
      next(err)
    })

  }
}
