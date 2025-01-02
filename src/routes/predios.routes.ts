import { Router } from 'express';
import PredioController from '../controllers/predio.controller';
import { Routes } from '../interfaces/routes.interfaces';

class PrediosRoute implements Routes {
  public path = '/predios';
  public router = Router();
  public predioController = new PredioController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.predioController.getPredios); // Obtener todos los predios
    this.router.get(`${this.path}/:id`, this.predioController.getPredioById); // Obtener un predio por ID
    this.router.get(`${this.path}/cuenta/:cuenta`, this.predioController.getPredioByCuenta); // Obtener un predio por CUENTA
    this.router.get(`${this.path}/details/:cuenta`, this.predioController.getDetailsAndBoundaries);
    this.router.post(`${this.path}`, this.predioController.createPredio); // Crear un nuevo predio
    this.router.patch(`${this.path}/:id`, this.predioController.updatePredio); // Actualizar un predio por ID
    this.router.delete(`${this.path}/:id`, this.predioController.deletePredio); // Eliminar un predio por ID
  }
}

export default PrediosRoute;
