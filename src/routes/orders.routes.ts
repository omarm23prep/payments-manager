import { Router } from 'express';
import { Routes } from '../interfaces/routes.interfaces';
import ordersController from '../controllers/orders.controller';

class PotablesRoutes implements Routes {
  public path = '/orders';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, ordersController.getAll);
    this.router.get(`${this.path}/:id`, ordersController.getById);
    this.router.post(`${this.path}/`, ordersController.create);
    this.router.put(`${this.path}/:id`, ordersController.update);
    this.router.delete(`${this.path}/:id`, ordersController.delete);
  }
}

export default PotablesRoutes;
