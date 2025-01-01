import { Predio } from '../models/predio.model';
import PredioModel from '../schemas/predio.schema';
import { isEmpty } from '../utils/utils';

class PredioService {
  public predio = PredioModel;

  public async findAllPredios(): Promise<Predio[]> {
    const predios: Predio[] = await this.predio.find();
    return predios;
  }

  public async findPredioById(predioId: string): Promise<Predio> {
    if (isEmpty(predioId)) throw new Error('Predio ID is empty');

    const findPredio: Predio | null = await this.predio.findOne({ _id: predioId });
    if (!findPredio) throw new Error("Predio doesn't exist");

    return findPredio;
  }

  public async findPredioByCuenta(cuenta: number): Promise<Predio> {
    if (isEmpty(cuenta)) throw new Error('Cuenta is empty');

    const findPredio: Predio | null = await this.predio.findOne({ CUENTA: cuenta });
    if (!findPredio) throw new Error("Predio doesn't exist");

    return findPredio;
  }

  public async createPredio(predioData: Predio): Promise<Predio> {
    if (isEmpty(predioData)) {
      throw new Error('Predio data is empty');
    }

    const findPredio: Predio | null = await this.predio.findOne({ CUENTA: predioData.cuenta });
    if (findPredio) {
      throw new Error(`Predio with CUENTA: ${predioData.cuenta} already exists`);
    }

    const createdPredio: Predio = await this.predio.create(predioData);

    return createdPredio;
  }

  public async removePredio(predioId: string): Promise<Predio | null> {
    try {
      const removedPredio: Predio | null = await this.predio.findOneAndDelete({ _id: predioId });

      if (!removedPredio) throw new Error("Predio doesn't exist");

      return removedPredio;
    } catch (error: unknown) {
      console.error(error);
      return null;
    }
  }

  public async updatePredio(predioId: string, predioData: Partial<Predio>): Promise<Predio | null> {
    try {
      const updatedPredio: Predio | null = await this.predio.findOneAndUpdate(
        { _id: predioId },
        { $set: predioData },
        { new: true }
      );

      if (!updatedPredio) throw new Error("Predio doesn't exist");

      return updatedPredio;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default PredioService;
