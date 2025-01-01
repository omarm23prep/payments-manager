import { NextFunction, Request, Response } from 'express';
import PredioService from '../services/predio.service';
import { Predio } from '../models/predio.model';

class PredioController {
  public predioService = new PredioService();

  public getPredios = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPrediosData: Predio[] = await this.predioService.findAllPredios();

      res.status(200).json({ data: findAllPrediosData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPredioById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioId: string = req.params.id;
      const findOnePredioData: Predio = await this.predioService.findPredioById(predioId);

      res.status(200).json({ data: findOnePredioData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getPredioByCuenta = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cuenta: number = parseInt(req.params.cuenta, 10);
      const findPredioData: Predio = await this.predioService.findPredioByCuenta(cuenta);

      res.status(200).json({ data: findPredioData, message: 'findByCuenta' });
    } catch (error) {
      next(error);
    }
  };

  public createPredio = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioData: Predio = req.body;
      const createPredioData: Predio = await this.predioService.createPredio(predioData);

      res.status(201).json({ message: `El predio con cuenta ${createPredioData.CUENTA} se ha creado satisfactoriamente` });
    } catch (error) {
      next(error);
    }
  };

  public updatePredio = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioId: string = req.params.id;
      const predioData = req.body;
      const updatePredioData: Predio | null = await this.predioService.updatePredio(predioId, predioData);

      res.status(200).json({ data: updatePredioData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePredio = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioId: string = req.params.id;
      const deletePredioData = await this.predioService.removePredio(predioId);

      res.status(200).json({ data: deletePredioData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default PredioController;
