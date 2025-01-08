import mongoose, { Schema, Document } from "mongoose";

export interface Direccion {
  id: number;
  direccionCompleta: string;
}

export interface Predio {
  id: number;
  cuentaCatastral: string;
  baseGravable: number;
  fechaCelebracion: string;
  fechaAdeudo: string;
  direccion: Direccion;
}

export interface Contribuyente extends Document {
  id: string;
  activo: boolean;
  estatus: string;
  contribuyente: string;
  predio: Predio;
}

// Subschema for Direccion
const DireccionSchema: Schema = new Schema({
  id: { type: Number, required: true },
  direccionCompleta: { type: String, required: true },
});

// Subschema for Predio
const PredioSchema: Schema = new Schema({
  id: { type: Number, required: true },
  cuentaCatastral: { type: String, required: true },
  baseGravable: { type: Number, required: true },
  fechaCelebracion: { type: String, required: true },
  fechaAdeudo: { type: String, required: true },
  direccion: { type: DireccionSchema, required: true },
});

// Main schema for Contribuyente
const ContribuyenteSchema: Schema = new Schema({
  id: { type: String, required: true },
  activo: { type: Boolean, required: true },
  estatus: { type: String, required: true },
  contribuyente: { type: String, required: true },
  predio: { type: PredioSchema, required: true },
});

export default mongoose.model<Contribuyente>("Contribuyente", ContribuyenteSchema);
