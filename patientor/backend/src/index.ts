import express from 'express';
import cors from 'cors';
import diagnoseRouter from './modules/diagnose/diagnose-router';
import patientRouter from './modules/patient/patient-router';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diagnose', diagnoseRouter);
app.use('/api/patients', patientRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log('Server running at port ', PORT);
});
