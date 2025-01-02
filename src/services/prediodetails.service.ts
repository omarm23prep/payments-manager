import { Document } from 'mongoose';
import { isEmpty } from '../utils/utils';
import PredioDetailsModel from '../schemas/prediodetails.schema';
import { PredioDetails } from '../models/prediodetails';

class PredioDetailsService {
  public predioDetails = PredioDetailsModel;

  // Obtener todos los registros
  public async findAllPredioDetails(): Promise<Document[]> {
    const predioDetails: Document[] = await this.predioDetails.find();
    return predioDetails;
  }

  // Buscar registro por ID
  public async findPredioDetailsById(predioDetailsId: string): Promise<Document | null> {
    if (isEmpty(predioDetailsId)) throw new Error('PredioDetails ID is empty');

    const findPredioDetails: Document | null = await this.predioDetails.findOne({ _id: predioDetailsId });
    if (!findPredioDetails) throw new Error("PredioDetails doesn't exist");

    return findPredioDetails;
  }

  // Buscar registro por cuenta
  public async findPredioDetailsByCuenta(cuenta: number): Promise<PredioDetails | null> {
    if (isEmpty(cuenta)) throw new Error('Cuenta is empty');

    const findPredioDetails: PredioDetails | null = await this.predioDetails.findOne({ cuenta });
    if (!findPredioDetails) throw new Error("PredioDetails doesn't exist");

    return findPredioDetails;
  }

  // Crear un nuevo registro
  public async createPredioDetails(predioDetailsData: PredioDetails): Promise<Document> {
    if (isEmpty(predioDetailsData)) {
      throw new Error('PredioDetails data is empty');
    }

    const findPredioDetails: Document | null = await this.predioDetails.findOne({ cuenta: predioDetailsData.cuenta });
    if (findPredioDetails) {
      throw new Error(`PredioDetails with CUENTA: ${predioDetailsData.cuenta} already exists`);
    }

    const createdPredioDetails: Document = await this.predioDetails.create(predioDetailsData);

    return createdPredioDetails;
  }

  // Eliminar un registro por ID
  public async removePredioDetails(predioDetailsId: string): Promise<Document | null> {
    try {
      const removedPredioDetails: Document | null = await this.predioDetails.findOneAndDelete({ _id: predioDetailsId });

      if (!removedPredioDetails) throw new Error("PredioDetails doesn't exist");

      return removedPredioDetails;
    } catch (error: unknown) {
      console.error(error);
      return null;
    }
  }

  // Actualizar un registro
  public async updatePredioDetails(
    predioDetailsId: string,
    predioDetailsData: Partial<any>
  ): Promise<Document | null> {
    try {
      const updatedPredioDetails: Document | null = await this.predioDetails.findOneAndUpdate(
        { _id: predioDetailsId },
        { $set: predioDetailsData },
        { new: true }
      );

      if (!updatedPredioDetails) throw new Error("PredioDetails doesn't exist");

      return updatedPredioDetails;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default PredioDetailsService;
