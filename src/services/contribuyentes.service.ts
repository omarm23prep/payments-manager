import mongoose from "mongoose";
import contribuyente, { Contribuyente  } from "../schemas/contribuyente";

class ContribuyenteService {
  /**
   * Get all contribuyentes
   */
  async getAll(): Promise<Contribuyente[]> {
    try {
      return await contribuyente.find();
    } catch (error) {
      throw new Error(`Error fetching contribuyentes: ${error}`);
    }
  }

  /**
   * Get a contribuyente by ID
   * @param id - Contribuyente ID
   */
  async getById(id: string): Promise<Contribuyente | null> {
    try {
      return await contribuyente.findById(id);
    } catch (error) {
      throw new Error(`Error fetching contribuyente with ID ${id}: ${error}`);
    }
  }

  /**
   * Create a new contribuyente
   * @param contribuyenteData - Contribuyente data
   */
  async create(contribuyenteData: Contribuyente): Promise<Contribuyente> {
    try {
      const newContribuyente = new contribuyente(contribuyenteData);
      return await newContribuyente.save();
    } catch (error) {
      throw new Error(`Error creating contribuyente: ${error}`);
    }
  }

  /**
   * Update a contribuyente by ID
   * @param id - Contribuyente ID
   * @param updateData - Data to update
   */
  async update(id: string, updateData: Partial<Contribuyente>): Promise<Contribuyente | null> {
    try {
      return await contribuyente.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw new Error(`Error updating contribuyente with ID ${id}: ${error}`);
    }
  }

  /**
   * Delete a contribuyente by ID
   * @param id - Contribuyente ID
   */
  async delete(id: string): Promise<Contribuyente | null> {
    try {
      return await contribuyente.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Error deleting contribuyente with ID ${id}: ${error}`);
    }
  }
}

export default new ContribuyenteService();
