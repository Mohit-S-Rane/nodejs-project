export class UserController {
  
  static login(req, res, next) {
      const error = new Error('User does not exist');
      next(error);
  }

  static test(req, res, next) {
      console.log('called');
      
  }
}
