import ColindaModel from '../schemas/colinda.schema';
import { isEmpty } from '../utils/utils';

class ColindaService {
  public colinda = ColindaModel;

  public async findAllColindas(): Promise<any[]> {
    const colindas = await this.colinda.find();
    return colindas;
  }

  public async findColindaById(colindaId: string): Promise<any> {
    if (isEmpty(colindaId)) throw new Error('Colinda ID is empty');

    const findColinda = await this.colinda.findOne({ _id: colindaId });
    if (!findColinda) throw new Error("Colinda doesn't exist");

    return findColinda;
  }

  // Buscar múltiples registros por cuenta
  public async findColindasByCuenta(cuenta: number): Promise<any[]> {
    if (isEmpty(cuenta)) throw new Error('Cuenta is empty');

    const findColindas = await this.colinda.find({ cuenta });
    if (!findColindas || findColindas.length === 0) throw new Error("No Colindas found for the given cuenta");

    return findColindas;
  }

  public async createColinda(colindaData: any): Promise<any> {
    if (isEmpty(colindaData)) {
      throw new Error('Colinda data is empty');
    }

    const createdColinda = await this.colinda.create(colindaData);
    return createdColinda;
  }

  public async removeColinda(colindaId: string): Promise<any | null> {
    try {
      const removedColinda = await this.colinda.findOneAndDelete({ _id: colindaId });

      if (!removedColinda) throw new Error("Colinda doesn't exist");

      return removedColinda;
    } catch (error: unknown) {
      console.error(error);
      return null;
    }
  }

  public async updateColinda(colindaId: string, colindaData: Partial<any>): Promise<any | null> {
    try {
      const updatedColinda = await this.colinda.findOneAndUpdate(
        { _id: colindaId },
        { $set: colindaData },
        { new: true }
      );

      if (!updatedColinda) throw new Error("Colinda doesn't exist");

      return updatedColinda;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default ColindaService;
