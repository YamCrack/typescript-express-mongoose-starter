import { Document, Schema, model } from 'mongoose';
import { Cirugia } from '../interfaces/cirugia.interface';

const cirugiaSchema: Schema = new Schema<Cirugia>({
    fecha: {
      type: Date,
      required: true,
    },
    hora: {
      type: String,
      required: true,
    },
    cirugia: {
      type: String,
      required: true,
    },
    medico: {
      type: String,
      required: true,
    },
    anestesiologo: {
      type: String,
      required: true,
    },
    fechaProg: {
      type: Date,
      required: true,
    },
    equiposApoyo: {
      type: String,
      required: true,
    },
    qx: {
      type: String,
      required: true,
    },
  });
  
  const cirugiaModel = model<Cirugia & Document>('Cirugia', cirugiaSchema);
  
  export default cirugiaModel;