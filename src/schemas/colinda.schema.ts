import { model, Schema, Document } from 'mongoose';

const colindaSchema = new Schema({
  recaudaan: { type: Number, default: null },
  cuenta: { type: Number, default: null },
  antiguo: { type: String, default: null },
  folio: { type: Number, default: null },
  consecu: { type: Number, default: null },
  colinda: { type: String, default: null },
  temp: { type: Boolean, default: null },
  colindav: { type: String, default: null },
  municipian: { type: Number, default: null },
  municipiac: { type: Number, default: null },
  agencia: { type: Number, default: null },
  sector: { type: Number, default: null },
  manzana: { type: Number, default: null },
  lote: { type: Number, default: null },
  verificado: { type: Boolean, default: null },
  id: { type: Number, default: null },
  edificio: { type: String, default: null },
  condominio: { type: String, default: null },
  hash: { type: String, default: null },
  id_pad: { type: Number, default: null },
  fecha_l: { type: String, default: null },
  usu_id: { type: Number, default: null },
  orienta: { type: String, default: null },
  longitud: { type: Number, default: null },
});

const ColindaModel = model<Document & { [key: string]: any }>('colinda', colindaSchema, 'colinda');

export default ColindaModel;
