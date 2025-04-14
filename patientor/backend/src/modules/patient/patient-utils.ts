import { isString } from '../../utils/validators/general-validators';
import {
  Gender,
  NewPatient,
  Patient,
  PublicPatientInfo
} from './patient-types';

const parseString = (value: unknown): string => {
  if (isString(value)) return value.toString();
  throw new Error('Incorrect name format');
};

const parseDate = (value: unknown): string => {
  if (isString(value) && Boolean(Date.parse(value))) return value;
  throw new Error('Incorrect date of birth format');
};

const isGender = (value: unknown): value is Gender => {
  return isString(value) && Object.values(Gender).some((g) => g === value as Gender);
};

const parseGender = (value: unknown): Gender => {
  if (isGender(value)) return value;
  throw new Error('Incorrect gender format');
};

export const toNewPatient = (data: unknown): NewPatient => {
  if (!data || typeof data !== 'object')
    throw new Error('Incorrect data or missing');

  if (
    'name' in data &&
    'dateOfBirth' in data &&
    'ssn' in data &&
    'gender' in data &&
    'occupation' in data
  ) {
    const toAdd: NewPatient = {
      name: parseString(data.name),
      dateOfBirth: parseDate(data.dateOfBirth),
      ssn: parseString(data.ssn),
      gender: parseGender(data.gender),
      occupation: parseString(data.occupation)
    };
    return toAdd;
  }

  throw new Error('Some data is missing');
};

export const toPublicPatientInfo = (patient: Patient): PublicPatientInfo => {
  const { id, dateOfBirth, gender, name, occupation } = patient;
  return {
    id,
    dateOfBirth,
    gender,
    name,
    occupation
  };
};
