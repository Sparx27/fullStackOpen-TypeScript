import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!')
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  const err = { error: "malformatted parameters" }
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
})

app.listen(3000, () => {
  console.log('Server running at port ', 3000);
})