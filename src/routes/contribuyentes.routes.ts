import { Router } from 'express';
import { Routes } from '../interfaces/routes.interfaces';
import contribuyenteController from '../controllers/contribuyentes.controller';

class ContribuyentesRoute implements Routes {
  public path = '/contribuyentes';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, contribuyenteController.getAll);
    this.router.get(`${this.path}/:id`, contribuyenteController.getById);
    this.router.post(`${this.path}/`, contribuyenteController.create);
    this.router.put(`${this.path}/:id`, contribuyenteController.update);
    this.router.delete(`${this.path}/:id`, contribuyenteController.delete);
  }
}

export default ContribuyentesRoute;
