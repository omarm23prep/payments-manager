import { NextFunction, Request, Response } from 'express';
import PredioService from '../services/predio.service';
import { Predio } from '../models/predio.model';
import { Colinda } from '../models/colinda.model';
import PredioDetailsService from '../services/prediodetails.service';
import ColindaService from '../services/colinda.service';
import { PredioDetails } from '../models/prediodetails';

class PredioController {
  public predioService = new PredioService();
  public predioDetailsService = new PredioDetailsService();
  public colindaService = new ColindaService();

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

  public getDetailsAndBoundaries = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cuenta: number = parseInt(req.params.cuenta, 10);
      const predio: PredioDetails | null = await this.predioDetailsService.findPredioDetailsByCuenta(cuenta);
      const boundaries: Colinda[] = await this.colindaService.findColindasByCuenta(cuenta);

      res.status(200).json({
        data: {
          cuenta: predio?.cuenta,
          propietario: predio?.propietari,
          domicilio: predio?.domicilio,
          manzana: predio?.manzana,
          municipio: predio?.municipian,
          colindancias: boundaries.map(boundary => boundary.colinda),
        },
        message: 'findByCuenta'
      });
    } catch (error) {
      next(error);
    }
  }

  public createPredio = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const predioData: Predio = req.body;
      const createPredioData: Predio = await this.predioService.createPredio(predioData);

      res.status(201).json({ message: `El predio con cuenta ${createPredioData.cuenta} se ha creado satisfactoriamente` });
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
