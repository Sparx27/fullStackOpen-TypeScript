import { isString } from '../../utils/validators/general-validators';
import { NewDiagnose } from './diagnose-types';

const parseName = (value: unknown): string => {
  if (!isString(value)) throw new Error('Incorrect name format');
  return value;
};

const parseLatin = (value: unknown): string => {
  if (!isString(value)) throw new Error('Incorrect latin format');
  return value;
};

export const toNewDiagnose = (obj: unknown): NewDiagnose => {
  if (!obj || typeof obj != 'object')
    throw new Error('Incorrect or missing data');

  if ('name' in obj) {
    let latin: string | undefined;
    if ('latin' in obj) latin = parseLatin(obj.latin);
    const toAdd: NewDiagnose = {
      name: parseName(obj.name),
    };
    if (latin) toAdd.latin = latin;
    return toAdd;
  }

  throw new Error('Some data is missing');
};
