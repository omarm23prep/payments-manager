import { Router } from 'express';
import { Routes } from '../interfaces/routes.interfaces';
import drenajeController from '../controllers/drenajes.controller';

class DrenajesRoutes implements Routes {
  public path = '/drenajes';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, drenajeController.getAll);
    this.router.get(`${this.path}/:id`, drenajeController.getById);
    this.router.get(`${this.path}/fullname/:fullname`, drenajeController.getByFullname);
    this.router.post(`${this.path}/`, drenajeController.create);
    this.router.put(`${this.path}/:id`, drenajeController.update);
    this.router.delete(`${this.path}/:id`, drenajeController.delete);
  }
}

export default DrenajesRoutes;
