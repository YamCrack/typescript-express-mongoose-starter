import { Cirugia } from "@/interfaces/cirugia.interface";
import { IsDate, IsDateString, IsEmail, IsString } from "class-validator";

export class CreateCirugiaDto implements Cirugia {
    @IsDateString({message: 'La fecha debe ser un formato de fecha válido'})
    fecha: Date;

    @IsString()
    hora: string;
    
    @IsString()
    cirugia: string;

    @IsString()
    medico: string;

    @IsString()
    anestesiologo: string;

    @IsDateString()
    fechaProg: Date;

    @IsString()
    equiposApoyo: string;

    @IsString()
    qx: string;

  }
  