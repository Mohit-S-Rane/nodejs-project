import { Router } from "express";
import { UserController } from './../controllers/UserController';
import { body } from 'express-validator';
import { UserValidators } from './../validators/UserValidator';
import { GlobalMiddleWare } from './../middlewares/GlobalMiddleWare';

class UserRouter {
  public router: Router;

  constructor() {
      this.router = Router();
      this.getRoutes();
      this.postRoutes();
      this.patchRoutes();
      this.deleteRoutes();
  }

  getRoutes() {}

  postRoutes() {
    this.router.post('/signup', UserValidators.signup(), GlobalMiddleWare.checkError, UserController.signUp);

  }

  patchRoutes() {
    this.router.patch('/verify', UserValidators.verifyUser(), GlobalMiddleWare.checkError, UserController.verify);
  
  }

  deleteRoutes() {}

}

export default new UserRouter().router;