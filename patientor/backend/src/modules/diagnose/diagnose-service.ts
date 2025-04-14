import data from '../../data/diagnoses';
import { Diagnose, NewDiagnose } from './diagnose-types';
import { v1 as uuid } from 'uuid';

const diagnoses = data as Diagnose[];

export const getAll = (): Diagnose[] => data;

export const add = (data: NewDiagnose): Diagnose => {
  const newDiagnose: Diagnose = {
    code: uuid(),
    ...data,
  };
  diagnoses.push(newDiagnose);
  return newDiagnose;
};
