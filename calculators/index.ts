import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculate } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  const err = { error: "malformatted parameters" };
  if (!height || !weight) {
    res.status(400).json(err);
    return;
  }
  const hValue = Number(height);
  const wValue = Number(weight);
  if (isNaN(hValue) || isNaN(wValue)) {
    res.status(400).json(err);
    return;
  }
  const result = calculateBmi({ height: hValue, weight: wValue });
  res.json({ weight: wValue, height: hValue, bmi: result });
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    res.status(400).json({ error: "parameters missing" });
    return;
  }
  if (
    !Array.isArray(daily_exercises) ||
    !daily_exercises.every(v => typeof v === 'number') ||
    typeof target !== 'number'
  ) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }
  const result = calculate(target, daily_exercises);
  res.json(result);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log('Server running at port ', PORT);
});