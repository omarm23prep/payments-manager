import { model, Schema, Document } from 'mongoose';

const predioDetailsSchema = new Schema({
    recaudaan: { type: Number, default: null },
    municipian: { type: Number, default: null },
    antiguo: { type: String, default: null },
    cuenta: { type: Number, default: null },
    folio: { type: Number, default: null },
    propietari: { type: String, default: null },
    apepat: { type: String, default: null },
    apemat: { type: String, default: null },
    nombres: { type: String, default: null },
    domicilio: { type: String, default: null },
    vialidad: { type: String, default: null },
    calle: { type: String, default: null },
    numext: { type: String, default: null },
    numint: { type: String, default: null },
    letra: { type: String, default: null },
    colFuh: { type: String, default: null },
    descCfuh: { type: String, default: null },
    cPost: { type: String, default: null },
    estado: { type: String, default: null },
    descEconn: { type: String, default: null },
    mzna: { type: String, default: null },
    zona: { type: String, default: null },
    etapa: { type: String, default: null },
    bimEmi: { type: Number, default: null },
    fechmov: { type: String, default: null },
    tipoMov: { type: String, default: null },
    tipoOpe: { type: String, default: null },
    fechCel: { type: String, default: null },
    cveUser: { type: String, default: null },
    fechrevl: { type: String, default: null },
    temp: { type: Boolean, default: false },
    folion: { type: Number, default: null },
    predMov: { type: String, default: null },
    nosirve: { type: String, default: null },
    registro: { type: String, default: null },
    medida: { type: String, default: null },
    horaMov: { type: String, default: null },
    emision: { type: Number, default: null },
    cuentaant: { type: String, default: null },
    propAnt: { type: String, default: null },
    municipiac: { type: Number, default: null },
    agencia: { type: Number, default: null },
    sector: { type: Number, default: null },
    manzana: { type: Number, default: null },
    lote: { type: Number, default: null },
    edificio: { type: Number, default: null },
    condominio: { type: Number, default: null },
    fechReg: { type: String, default: null },
    rfc: { type: String, default: null },
    sexo: { type: String, default: null },
    telefono: { type: String, default: null },
    nacionalid: { type: String, default: null },
    numSolpag: { type: String, default: null },
    fecSolpag: { type: String, default: null },
    municipiF: { type: String, default: null },
    tipMovant: { type: Number, default: null },
    tmovAnt: { type: String, default: null },
    curp: { type: String, default: null },
    verificado: { type: Boolean, default: false },
    id: { type: Number, default: null },
    tomo: { type: String, default: null },
    escritura: { type: String, default: null },
    notario: { type: String, default: null },
    hash: { type: String, default: null },
    idPad: { type: Number, default: null },
    fechaL: { type: String, default: null },
    usuId: { type: Number, default: null },
    modifica: { type: String, default: null },
    etConNn: { type: String, default: null },
    loteN: { type: String, default: null },
    eliminado: { type: Boolean, default: false },
    loteU: { type: String, default: null },
    mznaU: { type: String, default: null },
    modifJur: { type: String, default: null },
    folioSeg: { type: String, default: null },
    movJun16: { type: String, default: null },
    obsQuin: { type: String, default: null },
});

const PredioDetailsModel = model<Document & { [key: string]: any }>('predialhis', predioDetailsSchema, 'predialhis');

export default PredioDetailsModel;
