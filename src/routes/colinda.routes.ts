import { Router } from 'express';
import ColindaController from '../controllers/colinda.controller';
import { Routes } from '../interfaces/routes.interfaces';

class ColindasRoute implements Routes {
  public path = '/colindas';
  public router = Router();
  public colindaController = new ColindaController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Obtener todos los registros
    this.router.get(`${this.path}/getAll`, this.colindaController.getColindas); 
    // Obtener un registro por ID
    this.router.get(`${this.path}/:id`, this.colindaController.getColindaById); 
    // Obtener múltiples registros por CUENTA
    this.router.get(`${this.path}/cuenta/:cuenta`, this.colindaController.getColindasByCuenta); 
    // Crear un nuevo registro
    this.router.post(`${this.path}`, this.colindaController.createColinda); 
    // Actualizar un registro por ID
    this.router.patch(`${this.path}/:id`, this.colindaController.updateColinda); 
    // Eliminar un registro por ID
    this.router.delete(`${this.path}/:id`, this.colindaController.deleteColinda); 
  }
}

export default ColindasRoute;
