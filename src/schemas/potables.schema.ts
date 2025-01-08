import mongoose, { Schema, Document } from "mongoose";

export interface IContractType {
  descripcion: string;
  id: number;
}

export interface IContract {
  id: number;
  numero: string;
  fechaContrato: string;
  fechaAdeudo: string;
  direccion: string;
  esCobroMedido: boolean;
  esEmpadronado: boolean;
  esEmpadronadoPadre: boolean;
}

export interface IPotable extends Document{
  id: number;
  estatus: string;
  contribuyente: string;
  activo: boolean;
  contrato: IContract;
  tipo: IContractType
}

const ContractTypeSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const ContractSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  fechaContrato: {
    type: String,
    required: true,
  },
  fechaAdeudo: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  esCobroMedido: {
    type: Boolean,
    required: true,
  },
  esEmpadronado: {
    type: Boolean,
    required: true,
  },
  esEmpadronadoPadre: {
    type: Boolean,
    required: true,
  },
});

const PotableSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  estatus: {
    type: String,
    required: true,
    enum: ['Con Adeudo', 'Sin Adeudo'],
  },
  contribuyente: {
    type: String,
    required: true,
  },
  activo: {
    type: Boolean,
    default: true,
  },
  contrato: {
    type: ContractSchema,
    required: true,
  },
  tipo: {
    type: ContractTypeSchema,
    required: true,
  },
});

export default mongoose.model<IPotable>('Potable', PotableSchema);
