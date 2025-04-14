import { Router } from 'express';
import { getAll, add } from './patient-controller';

const patientRouter = Router();

patientRouter.get('/', getAll);

patientRouter.post('/', add);

export default patientRouter;
