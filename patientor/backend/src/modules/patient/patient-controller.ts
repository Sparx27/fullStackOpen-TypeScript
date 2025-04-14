import { Request, Response } from 'express';
import * as patientService from './patient-service';
import { PublicPatientInfo } from './patient-types';
import { toNewPatient } from './patient-utils';

export const getAll = (_req: Request, res: Response): void => {
  const patients: PublicPatientInfo[] = patientService.getAll();
  res.json(patients);
};

export const add = (req: Request, res: Response): void => {
  try {
    const newPatientData = toNewPatient(req.body);
    const addedPatient = patientService.add(newPatientData);
    res.status(200).json(addedPatient);
  }
  catch (err) {
    let message = 'Something went wrong.';
    if (err instanceof Error) message += ` ${err.message}`;
    res.status(400).json({ error: message });
  }
};
