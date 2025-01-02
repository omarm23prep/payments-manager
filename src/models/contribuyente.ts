export interface Contribuyente {
  id: string,
  activo: boolean,
  estatus: string,
  contribuyente: string,
  predio: Predio,
}

interface Predio {
  id: number,
  cuentaCatastral: string,
  baseGravable: number,
  fechaCelebracion: string,
  fechaAdeudo: string,
  direccion: {
      id: number,
      direccionCompleta: string,
  }
}
