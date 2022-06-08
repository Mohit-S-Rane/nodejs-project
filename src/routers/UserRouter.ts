import { Router } from "express";
import { UserController } from './../controllers/UserController';
import { body } from 'express-validator';
import { UserValidators } from './../validators/UserValidator';

class UserRouter {
  public router: Router;

  constructor() {
      this.router = Router();
      this.getRoutes();
      this.postRoutes();
      this.patchRoutes();
      this.deleteRoutes();
  }

  getRoutes() {
      this.router.post('/signup', UserValidators.signup(), UserController.signUp)
  }

  postRoutes() {}

  patchRoutes() {}

  deleteRoutes() {}

}

export default new UserRouter().router;