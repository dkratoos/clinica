import { Injectable } from '@nestjs/common';
// import { CreateHorarioDto } from './dto/create-horario.dto';
// import { UpdateHorarioDto } from './dto/update-horario.dto';
import { Horario, type, week } from './entities/horario.entity';
import { Horarios } from './entities/horarios.entity';
// import { LowSync, JSONFileSync } from 'lowdb';

// const db = new LowSync(new JSONFileSync('horarios.json'));
// db.read();
@Injectable()
export class HorariosService {
  private readonly horarios: Horarios = {
    1: {
      id: 1,
      day: '',
      type: type.diario,
      weekDays: [],
      intervals: [
        { start: '14:30', end: '15:00' },
        { start: '15:10', end: '15:30' },
      ],
    },
    2: {
      id: 2,
      day: '20-09-2021',
      type: type.diaEspecifico,
      weekDays: [],
      intervals: [
        { start: '14:30', end: '15:00' },
        { start: '15:00', end: '15:30' },
      ],
    },
    3: {
      id: 3,
      day: '21-09-2021',
      type: type.diaEspecifico,
      weekDays: [],
      intervals: [
        { start: '14:30', end: '15:00' },
        { start: '15:10', end: '15:30' },
      ],
    },
    4: {
      id: 4,
      day: '',
      type: type.semanal,
      weekDays: [week.terca, week.quinta],
      intervals: [
        { start: '14:30', end: '15:00' },
        { start: '15:10', end: '15:30' },
      ],
    },
  };

  findDisponibility(interval): string {
    return interval;
  }

  findAll(): Horarios {
    return this.horarios;
  }

  create(newHorario: Horario): void {
    const id = new Date().valueOf();
    this.horarios[id] = {
      ...newHorario,
      id,
    };
  }

  find(id: number): Horario {
    const record: Horario = this.horarios[id];

    if (record) {
      return record;
    }

    throw new Error('No record found');
  }

  update(updatedHorario: Horario): void {
    if (this.horarios[updatedHorario.id]) {
      this.horarios[updatedHorario.id] = updatedHorario;
      return;
    }

    throw new Error('No record found to update');
  }

  delete(id: number): void {
    const record: Horario = this.horarios[id];

    if (record) {
      delete this.horarios[id];
      return;
    }

    throw new Error('No record found to delete');
  }
}
