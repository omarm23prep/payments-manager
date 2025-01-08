import { Router } from 'express';
import PredioDetailsController from '../controllers/prediodetails.controller';
import { Routes } from '../interfaces/routes.interfaces';

class PredioDetailsRoute implements Routes {
  public path = '/prediodetails';
  public router = Router();
  public predioDetailsController = new PredioDetailsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Obtener todos los registros
    this.router.get(`${this.path}/getAll`, this.predioDetailsController.getAllPredioDetails);
    // Obtener un registro por ID
    this.router.get(`${this.path}/:id`, this.predioDetailsController.getPredioDetailsById);
    // Obtener un registro por cuenta
    this.router.get(`${this.path}/cuenta/:cuenta`, this.predioDetailsController.getPredioDetailsByCuenta);
    // Crear un nuevo registro
    this.router.post(`${this.path}`, this.predioDetailsController.createPredioDetails);
    // Actualizar un registro por ID
    this.router.patch(`${this.path}/:id`, this.predioDetailsController.updatePredioDetails);
    // Eliminar un registro por ID
    this.router.delete(`${this.path}/:id`, this.predioDetailsController.deletePredioDetails);
  }
}

export default PredioDetailsRoute;
