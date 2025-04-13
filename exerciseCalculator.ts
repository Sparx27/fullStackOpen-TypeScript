// import { isNumber } from "./utils";

interface Result {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: Boolean;
  rating: number;
  ratingDescription: string;
}

/* const [, , trg, ...values] = process.argv;
const hours: Array<(string | undefined)> = [...values]; */

/* function verifyArgs() {
  if (!trg || !isNumber(trg)) throw new Error('ERROR: Target is wrong or missing');

  if (hours.length < 1 || hours.some(h => !isNumber(h)))
    throw new Error('ERROR: Hours are wrong or missing');
} */

function calcRating(target: number, average: number): number {
  const preRes: number = average / target;
  if (preRes <= 0.5) return 1;
  else if (preRes < 1) return 2;
  return 3;
}

function calcDescription(rating: number): string {
  if (rating === 1) return 'You could train more';
  if (rating === 2) return 'Not too bad but could be better';
  return 'Great job!';
}

function calculate(target: number, values: number[]): Result {
  const average: number = values.reduce((prev, curr) => curr + prev, 0) / values.length;
  const success: Boolean = average >= target;
  const rating: number = calcRating(target, average);
  const ratingDescription = calcDescription(rating);

  const res: Result = {
    periodLength: values.length,
    trainingDays: values.filter(v => v > 0).length,
    target,
    average,
    success,
    rating,
    ratingDescription
  };

  return res;
}

/* try {
  verifyArgs();
}
catch (err: unknown) {
  let errorMessage = 'Something went wrong';
  if (err instanceof Error) errorMessage = err.message
  console.log(errorMessage)
  process.exit(1)
} */

//console.log(calculate(Number(trg), hours.map(h => Number(h))))

export {
  calculate
};