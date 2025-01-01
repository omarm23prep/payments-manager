import { model, Schema, Document } from 'mongoose';
import { Predio } from '../models/predio.model';

const predioSchema = new Schema({
    antiguo: { type: String, default: null },
    recaudaac: { type: Number, default: null },
    cuenta: { type: Number, default: null, unique: true },
    recaudaan: { type: Number, default: null },
    municipiac: { type: Number, default: null },
    agencia: { type: Number, default: null },
    sector: { type: Number, default: null },
    manzana: { type: Number, default: null },
    lote: { type: String, default: null },
    ubicacion: { type: String, default: null },
    uso_suelo: { type: String, default: null },
    sup_terr: { type: Number, default: null },
    sup_const: { type: Number, default: null },
    basecatas: { type: Number, default: null },
    valor_terr: { type: Number, default: null },
    valor_cons: { type: Number, default: null },
    uno: { type: Number, default: null },
    folio: { type: String, default: null },
    temp: { type: Boolean, default: null },
    municipian: { type: String, default: null },
    impuesto: { type: Number, default: null },
    sup_ver: { type: Number, default: null },
    nosirve: { type: String, default: null },
    basecatant: { type: Number, default: null },
    bimestre: { type: String, default: null },
    basecatar: { type: Number, default: null },
    impuestor: { type: Number, default: null },
    valor_tras: { type: Number, default: null },
    num_tram: { type: String, default: null },
    edificio: { type: Number, default: null },
    condominio: { type: Number, default: null },
    no_reg: { type: String, default: null },
    val_inmob: { type: Number, default: null },
    sup_p_cart: { type: Number, default: null },
    zona_valor: { type: String, default: null },
    ubic_mzna: { type: String, default: null },
    forma_p: { type: String, default: null },
    indiviso_p: { type: Number, default: null },
    sup_c_cart: { type: Number, default: null },
    tipologia: { type: String, default: null },
    subniv: { type: Number, default: null },
    edo_cons: { type: String, default: null },
    tmp_cons: { type: Number, default: null },
    indiviso_c: { type: Number, default: null },
    base_inmov: { type: Number, default: null },
    val_suelo: { type: Number, default: null },
    fac_merito: { type: Number, default: null },
    fac_demeri: { type: Number, default: null },
    dem_dep_ec: { type: Number, default: null },
    baseinmant: { type: Number, default: null },
    verificado: { type: Boolean, default: false },
    _id: { type: Number, default: null },
    clasi_cata: { type: String, default: null },
    hash: { type: String, default: null },
    id_pad: { type: Number, default: null },
    fecha_l: { type: String, default: null },
    usu_id: { type: Number, default: null },
    modifica: { type: String, default: null },
    eliminado: { type: Boolean, default: false },
});


const PredioModel = model<Predio & Document>('predial', predioSchema, 'predial');

export default PredioModel;
