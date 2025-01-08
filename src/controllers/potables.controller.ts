import { Request, Response } from 'express';
import PotableService from '../services/potables.service';
import { IPotable } from '../schemas/potables.schema';

class PotableController {
  /**
   * Crear un nuevo documento en la colección Potables.
   * @param req Request de Express.
   * @param res Response de Express.
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const potable = await PotableService.create(req.body);
      res.status(201).json(potable);
    } catch (error: unknown) {
      res.status(500).json({ message: `Error al crear el documento: ${error}` });
    }
  }

  /**
   * Obtener todos los documentos en la colección Potables.
   * @param req Request de Express.
   * @param res Response de Express.
   */
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const potables: IPotable[] = await PotableService.getAll();

      // const mappedPotables = potables.map((potable: IPotable) => {
      //   return {
      //     id: potable.id,
      //     estatus: potable.estatus,
      //     contribuyente: potable.contribuyente,
      //     activo: potable.activo,
      //     contrato: potable.contrato,
      //   }
      // });
      res.status(200).json(potables);
    } catch (error: unknown) {
      res.status(500).json({ message: `Error al obtener los documentos: ${error}` });
    }
  }

  /**
   * Obtener un documento por su ID.
   * @param req Request de Express.
   * @param res Response de Express.
   */
  async getById(req: Request, res: Response): Promise<void> {
    try {
      const potable = await PotableService.getPotableById(Number(req.params.id));
      if (!potable) {
        res.status(404).json({ message: 'Documento no encontrado' });
        return;
      }
      res.status(200).json(potable);
    } catch (error: unknown) {
      res.status(500).json({ message: `Error al obtener el documento: ${error}` });
    }
  }

  /**
   * Actualizar un documento por su ID.
   * @param req Request de Express.
   * @param res Response de Express.
   */
  async update(req: Request, res: Response): Promise<void> {
    try {
      const potable = await PotableService.update(Number(req.params.id), req.body);
      if (!potable) {
        res.status(404).json({ message: 'Documento no encontrado para actualizar' });
        return;
      }
      res.status(200).json(potable);
    } catch (error: unknown) {
      res.status(500).json({ message: `Error al actualizar el documento: ${error}` });
    }
  }

  /**
   * Eliminar un documento por su ID.
   * @param req Request de Express.
   * @param res Response de Express.
   */
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const potable = await PotableService.delete(Number(req.params.id));
      if (!potable) {
        res.status(404).json({ message: 'Documento no encontrado para eliminar' });
        return;
      }
      res.status(200).json({ message: 'Documento eliminado con éxito' });
    } catch (error: unknown) {
      res.status(500).json({ message: `Error al eliminar el documento: ${error}` });
    }
  }
}

export default new PotableController();
