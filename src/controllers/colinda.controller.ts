import { NextFunction, Request, Response } from 'express';
import ColindaService from '../services/colinda.service';

class ColindaController {
  public colindaService = new ColindaService();

  // Obtener todos los registros
  public getColindas = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllColindasData = await this.colindaService.findAllColindas();
      res.status(200).json({ data: findAllColindasData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  // Obtener registro por ID
  public getColindaById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const colindaId: string = req.params.id;
      const findOneColindaData = await this.colindaService.findColindaById(colindaId);
      res.status(200).json({ data: findOneColindaData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  // Obtener múltiples registros por cuenta
  public getColindasByCuenta = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cuenta: number = parseInt(req.params.cuenta, 10);
      const findColindasData = await this.colindaService.findColindasByCuenta(cuenta);
      res.status(200).json({ data: findColindasData, message: 'findByCuenta' });
    } catch (error) {
      next(error);
    }
  };

  // Crear un nuevo registro
  public createColinda = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const colindaData = req.body;
      const createColindaData = await this.colindaService.createColinda(colindaData);
      res.status(201).json({ message: `Registro creado satisfactoriamente con cuenta ${createColindaData.cuenta}` });
    } catch (error) {
      next(error);
    }
  };

  // Actualizar un registro por ID
  public updateColinda = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const colindaId: string = req.params.id;
      const colindaData = req.body;
      const updateColindaData = await this.colindaService.updateColinda(colindaId, colindaData);
      res.status(200).json({ data: updateColindaData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  // Eliminar un registro por ID
  public deleteColinda = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const colindaId: string = req.params.id;
      const deleteColindaData = await this.colindaService.removeColinda(colindaId);
      res.status(200).json({ data: deleteColindaData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ColindaController;
