import { NextFunction, Request, Response } from 'express';
import PredioDetailsService from '../services/prediodetails.service';
import { PredioDetails } from '../models/prediodetails';
import ColindaService from '../services/colinda.service';

class PredioDetailsController {
  private predioDetailsService = new PredioDetailsService();
  private colindaService = new ColindaService();

  // Obtener todos los registros
  public getAllPredioDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllData = await this.predioDetailsService.findAllPredioDetails();
      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  // Obtener registro por ID
  public getPredioDetailsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioDetailsId: string = req.params.id;
      const findOneData = await this.predioDetailsService.findPredioDetailsById(predioDetailsId);
      res.status(200).json({ data: findOneData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  // Obtener registro por cuenta
  public getPredioDetailsByCuenta = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cuenta: number = parseInt(req.params.cuenta, 10);
      const findData = await this.predioDetailsService.findPredioDetailsByCuenta(cuenta);
      res.status(200).json({ data: findData, message: 'findByCuenta' });
    } catch (error) {
      next(error);
    }
  };

  // Crear un nuevo registro
  public createPredioDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioDetailsData = req.body;
      const createData:PredioDetails = await this.predioDetailsService.createPredioDetails(predioDetailsData);
      res.status(201).json({ message: `Registro creado satisfactoriamente con cuenta ${createData.cuenta}` });
    } catch (error) {
      next(error);
    }
  };

  // Actualizar un registro
  public updatePredioDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioDetailsId: string = req.params.id;
      const predioDetailsData = req.body;
      const updateData = await this.predioDetailsService.updatePredioDetails(predioDetailsId, predioDetailsData);
      res.status(200).json({ data: updateData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  // Eliminar un registro por ID
  public deletePredioDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioDetailsId: string = req.params.id;
      const deleteData = await this.predioDetailsService.removePredioDetails(predioDetailsId);
      res.status(200).json({ data: deleteData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default PredioDetailsController;
