import {
  IsString,
  IsOptional,
  IsNumber,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';

export enum type {
  diario = 'diario',
  semanal = 'semanal',
  diaEspecifico = 'dia especifico',
}

export enum week {
  segunda = 'Segunda-feira',
  terca = 'Terça-feira',
  quarta = 'Quarta-feira',
  quinta = 'Quinta-feira',
  sexta = 'Sexta-feira',
}

export class Horario {
  @IsNumber()
  @IsOptional()
  readonly id: number;

  @IsString()
  @IsOptional()
  readonly day: string;

  @IsEnum(type)
  @IsNotEmpty()
  @IsString()
  readonly type: type;

  @IsNotEmpty()
  readonly intervals: Array<{
    start: string;
    end: string;
  }>;

  @IsEnum(week)
  @IsOptional()
  readonly weekDays: Array<week>;
}
