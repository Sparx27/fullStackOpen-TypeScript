import data from '../../data/patients';
import { NewPatient, Patient, PublicPatientInfo } from './patient-types';
import { v1 as uuid } from 'uuid';
import { toPublicPatientInfo } from './patient-utils';

const patients = data as Patient[];

export const getAll = (): PublicPatientInfo[] => patients.map((p) => toPublicPatientInfo(p));

export const add = (data: NewPatient): PublicPatientInfo => {
  const toAdd: Patient = {
    id: uuid(),
    ...data
  };
  return toPublicPatientInfo(toAdd);
};
