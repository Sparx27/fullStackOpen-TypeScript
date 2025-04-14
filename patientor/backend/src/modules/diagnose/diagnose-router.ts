import { Router } from 'express';
import { add, getAll } from './diagnose-controller';
const diagnoseRouter = Router();

diagnoseRouter.get('/', getAll);

diagnoseRouter.post('/', add);

export default diagnoseRouter;
