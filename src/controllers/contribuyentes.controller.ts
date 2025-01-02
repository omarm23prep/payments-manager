import { Request, Response } from "express";
import contribuyenteService from "../services/contribuyentes.service";

class ContribuyenteController {
  /**
   * Get all contribuyentes
   */
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const contribuyentes = await contribuyenteService.getAll();
      res.status(200).json(contribuyentes);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
   * Get a contribuyente by ID
   */
  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const contribuyente = await contribuyenteService.getById(id);
      if (!contribuyente) {
        res.status(404).json({ message: `Contribuyente with ID ${id} not found` });
        return;
      }
      res.status(200).json(contribuyente);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
   * Create a new contribuyente
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const contribuyenteData = req.body;
      const newContribuyente = await contribuyenteService.create(contribuyenteData);
      res.status(201).json(newContribuyente);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * Update a contribuyente by ID
   */
  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedContribuyente = await contribuyenteService.update(id, updateData);
      if (!updatedContribuyente) {
        res.status(404).json({ message: `Contribuyente with ID ${id} not found` });
        return;
      }
      res.status(200).json(updatedContribuyente);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * Delete a contribuyente by ID
   */
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedContribuyente = await contribuyenteService.delete(id);
      if (!deletedContribuyente) {
        res.status(404).json({ message: `Contribuyente with ID ${id} not found` });
        return;
      }
      res.status(200).json(deletedContribuyente);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new ContribuyenteController();
