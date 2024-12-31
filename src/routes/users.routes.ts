import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { Routes } from '../interfaces/routes.interfaces';
// import validationMiddleware from '@middlewares/validation.middleware';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.get(`${this.path}/:id`, this.usersController.getUserById);
    this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
    this.router.patch(`${this.path}/:id`, this.usersController.updateUser);
    this.router.post(`${this.path}`, this.usersController.createUser);
  }
}

export default UsersRoute;
