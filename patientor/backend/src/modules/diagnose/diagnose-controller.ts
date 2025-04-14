import * as diagnoseService from './diagnose-service';
import { Request, Response } from 'express';
import { toNewDiagnose } from './diagnose-utils';

export const getAll = (_req: Request, res: Response): void => {
  const diagnoses = diagnoseService.getAll();
  res.json(diagnoses);
};

export const add = (req: Request, res: Response): void => {
  try {
    const newDiagnose = toNewDiagnose(req.body);

    const added = diagnoseService.add(newDiagnose);

    res.status(201).json(added);
  }
  catch (err) {
    let message = 'Something went wrong.';
    if (err instanceof Error) message += ` ${err.message}`;
    res.status(400).json({ error: message });
  }
};
