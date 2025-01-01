import { model, Schema, Document } from 'mongoose';
import { Predio } from '../models/predio.model';

const predioSchema: Schema = new Schema({
    ANTIGUO: { type: String, default: null },
    RECAUDAAC: { type: Number, default: null },
    CUENTA: { type: Number, default: null,unique: true },
    RECAUDAAN: { type: Number, default: null },
    MUNICIPIAC: { type: Number, default: null },
    AGENCIA: { type: Number, default: null },
    SECTOR: { type: Number, default: null },
    MANZANA: { type: Number, default: null },
    LOTE: { type: String, default: null },
    UBICACION: { type: String, default: null },
    USO_SUELO: { type: String, default: null },
    SUP_TERR: { type: Number, default: null },
    SUP_CONST: { type: Number, default: null },
    BASECATAS: { type: Number, default: null },
    VALOR_TERR: { type: Number, default: null },
    VALOR_CONS: { type: Number, default: null },
    UNO: { type: Number, default: null },
    FOLIO: { type: String, default: null },
    TEMP: { type: Boolean, default: null },
    MUNICIPIAN: { type: String, default: null },
    IMPUESTO: { type: Number, default: null },
    SUP_VER: { type: Number, default: null },
    NOSIRVE: { type: String, default: null },
    BASECATANT: { type: Number, default: null },
    BIMESTRE: { type: String, default: null },
    BASECATAR: { type: Number, default: null },
    IMPUESTOR: { type: Number, default: null },
    VALOR_TRAS: { type: Number, default: null },
    NUM_TRAM: { type: String, default: null },
    EDIFICIO: { type: Number, default: null },
    CONDOMINIO: { type: Number, default: null },
    NO_REG: { type: String, default: null },
    VAL_INMOB: { type: Number, default: null },
    SUP_P_CART: { type: Number, default: null },
    ZONA_VALOR: { type: String, default: null },
    UBIC_MZNA: { type: String, default: null },
    FORMA_P: { type: String, default: null },
    INDIVISO_P: { type: Number, default: null },
    SUP_C_CART: { type: Number, default: null },
    TIPOLOGIA: { type: String, default: null },
    SUBNIV: { type: Number, default: null },
    EDO_CONS: { type: String, default: null },
    TMP_CONS: { type: Number, default: null },
    INDIVISO_C: { type: Number, default: null },
    BASE_INMOV: { type: Number, default: null },
    VAL_SUELO: { type: Number, default: null },
    FAC_MERITO: { type: Number, default: null },
    FAC_DEMERI: { type: Number, default: null },
    DEM_DEP_EC: { type: Number, default: null },
    BASEINMANT: { type: Number, default: null },
    VERIFICADO: { type: Boolean, default: false },
    _ID: { type: Number, default: null },
    CLASI_CATA: { type: String, default: null },
    HASH: { type: String, default: null },
    ID_PAD: { type: Number, default: null },
    FECHA_L: { type: String, default: null },
    USU_ID: { type: Number, default: null },
    MODIFICA: { type: String, default: null },
    ELIMINADO: { type: Boolean, default: false },
});

const PredioModel = model<Predio & Document>('predial', predioSchema);

export default PredioModel;
