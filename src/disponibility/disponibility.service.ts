import { Injectable } from '@nestjs/common';
import { HorariosService } from '../horarios/horarios.service';
import * as dayjs from 'dayjs';
require('dayjs/locale/pt-br');

@Injectable()
export class DisponibilityService {
  constructor(private readonly horariosService: HorariosService) {}

  findDisponibility(interval): Array<string> {
    dayjs.locale('pt-br');
    // Define variaveis para pegar range de datas
    let ranges = [];
    let currentDate = dayjs(this.formatDate(interval.start));
    const closeTime = dayjs(this.formatDate(interval.end));

    // Pega range de datas
    while (currentDate.isBefore(closeTime) || currentDate.isSame(closeTime)) {
      ranges.push({ day: currentDate.format('DD-MM-YYYY'), intervals: [] });
      currentDate = currentDate.add(1, 'day');
    }

    // Formata prop horarios
    const arrHorarios = [];
    const ojbHorarios = this.horariosService.findAll();
    const chaves = Object.keys(ojbHorarios);

    chaves.filter((chave) => {
      arrHorarios.push(ojbHorarios[chave]);
    });

    // Gera os horarios disponiveis
    arrHorarios.filter((horario) => {
      ranges = ranges.map((range) => {
        if (
          dayjs(this.formatDate(range.day)).format('dddd') !== 'Sábado' &&
          dayjs(this.formatDate(range.day)).format('dddd') !== 'Domingo'
        ) {
          if (horario.type === 'diario') {
            return {
              day: range.day,
              intervals: range.intervals.concat(horario.intervals),
            };
          }

          if (horario.day === range.day) {
            return {
              day: range.day,
              intervals: range.intervals.concat(horario.intervals),
            };
          }

          const isSemanaDay = horario.weekDays.find(
            (weekDay) =>
              weekDay === dayjs(this.formatDate(range.day)).format('dddd'),
          );

          if (isSemanaDay) {
            return {
              day: range.day,
              intervals: range.intervals.concat(horario.intervals),
            };
          }
        }
        return range;
      });
    });
    return ranges;
  }

  formatDate(date): string {
    const newDate = date.split('-');

    return `${newDate[1]}-${newDate[0]}-${newDate[2]}`;
  }
}
