import Drenaje, { IDrenaje } from '../schemas/drenajes.schema';

class DrenajeService {
  /**
   * Crear un nuevo documento en la colección Drenajes.
   * @param drenajeData Datos del nuevo documento.
   * @returns El documento creado.
   */
  async create(drenajeData: Partial<IDrenaje>): Promise<IDrenaje> {
    try {
      const drenaje = new Drenaje(drenajeData);
      return await drenaje.save();
    } catch (error: unknown) {
      throw new Error(`Error al crear el documento: ${error}`);
    }
  }

  /**
   * Obtener todos los documentos en la colección Drenajes.
   * @returns Una lista de documentos.
   */
  async getAll(): Promise<IDrenaje[]> {
    try {
      return await Drenaje.find();
    } catch (error: unknown) {
      throw new Error(`Error al obtener documentos: ${error}`);
    }
  }

  /**
   * Obtener un documento específico por su ID.
   * @param id El ID del documento a buscar.
   * @returns El documento encontrado o `null` si no existe.
   */
  async getDrenajeById(id: number): Promise<IDrenaje | null> {
    try {
      return await Drenaje.findOne({ id });
    } catch (error: unknown) {
      throw new Error(`Error al obtener el documento con ID ${id}: ${error}`);
    }
  }

  /**
   * Obtener un documento específico por su fullname.
   * @param fullname El nombre del contribuyente del documento a buscar.
   * @returns El documento encontrado o `null` si no existe.
   */
  async getDrenajeByFullname(fullname: string): Promise<IDrenaje | null> {
    try {
      return await Drenaje.findOne({ "contribuyente": fullname });
    } catch (error: unknown) {
      throw new Error(`Error al obtener el documento con nombre ${fullname}: ${error}`);
    }
  }

  /**
   * Actualizar un documento por su ID.
   * @param id El ID del documento a actualizar.
   * @param updateData Los datos para actualizar.
   * @returns El documento actualizado o `null` si no se encontró.
   */
  async update(id: number, updateData: Partial<IDrenaje>): Promise<IDrenaje | null> {
    try {
      return await Drenaje.findOneAndUpdate({ id }, updateData, { new: true });
    } catch (error: unknown) {
      throw new Error(`Error al actualizar el documento con ID ${id}: ${error}`);
    }
  }

  /**
   * Eliminar un documento por su ID.
   * @param id El ID del documento a eliminar.
   * @returns El documento eliminado o `null` si no se encontró.
   */
  async delete(id: number): Promise<IDrenaje | null> {
    try {
      return await Drenaje.findOneAndDelete({ id });
    } catch (error: unknown) {
      throw new Error(`Error al eliminar el documento con ID ${id}: ${error}`);
    }
  }
}

export default new DrenajeService();
