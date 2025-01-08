import Potable, { IPotable } from '../schemas/potables.schema';

class PotableService {
  /**
   * Crear un nuevo documento en la colección Potables.
   * @param potableData Datos del nuevo documento.
   * @returns El documento creado.
   */
  async create(potableData: Partial<IPotable>): Promise<IPotable> {
    try {
      const potable = new Potable(potableData);
      return await potable.save();
    } catch (error: unknown) {
      throw new Error(`Error al crear el documento: ${error}`);
    }
  }

  /**
   * Obtener todos los documentos en la colección Potables.
   * @returns Una lista de documentos.
   */
  async getAll(): Promise<IPotable[]> {
    try {
      return await Potable.find();
    } catch (error: unknown) {
      throw new Error(`Error al obtener documentos: ${error}`);
    }
  }

  /**
   * Obtener un documento específico por su ID.
   * @param id El ID del documento a buscar.
   * @returns El documento encontrado o `null` si no existe.
   */
  async getPotableById(id: number): Promise<IPotable | null> {
    try {
      return await Potable.findOne({ id });
    } catch (error: unknown) {
      throw new Error(`Error al obtener el documento con ID ${id}: ${error}`);
    }
  }

  /**
   * Actualizar un documento por su ID.
   * @param id El ID del documento a actualizar.
   * @param updateData Los datos para actualizar.
   * @returns El documento actualizado o `null` si no se encontró.
   */
  async update(id: number, updateData: Partial<IPotable>): Promise<IPotable | null> {
    try {
      return await Potable.findOneAndUpdate({ id }, updateData, { new: true });
    } catch (error: unknown) {
      throw new Error(`Error al actualizar el documento con ID ${id}: ${error}`);
    }
  }

  /**
   * Eliminar un documento por su ID.
   * @param id El ID del documento a eliminar.
   * @returns El documento eliminado o `null` si no se encontró.
   */
  async delete(id: number): Promise<IPotable | null> {
    try {
      return await Potable.findOneAndDelete({ id });
    } catch (error: unknown) {
      throw new Error(`Error al eliminar el documento con ID ${id}: ${error}`);
    }
  }
}

export default new PotableService();
