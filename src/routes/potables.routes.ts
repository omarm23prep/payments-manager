import { Router } from 'express';
import { Routes } from '../interfaces/routes.interfaces';
import potableController from '../controllers/potables.controller';

class PotablesRoutes implements Routes {
  public path = '/potables';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, potableController.getAll);
    this.router.get(`${this.path}/:id`, potableController.getById);
    this.router.post(`${this.path}/`, potableController.create);
    this.router.put(`${this.path}/:id`, potableController.update);
    this.router.delete(`${this.path}/:id`, potableController.delete);
  }
}

export default PotablesRoutes;
