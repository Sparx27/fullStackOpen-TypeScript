import { isNumber } from "./utils";

type HeightWeight = {
  height: number;
  weight: number;
}

const [, , height, weight] = process.argv

function verifyArgs(): void {
  if (!height || !isNumber(height) || Number(height) <= 0) {
    throw new Error('ERROR: Height is wrong or missing')
  }

  if (!weight || !isNumber(weight) || Number(weight)) {
    throw new Error('ERROR: Weight is wrong or missing')
  }
}

function calculateBmi(info: HeightWeight): string {
  if (info.weight == 0) throw new Error('Weight can not be 0');
  let res: number = parseFloat((info.weight / Math.pow(info.height / 100, 2)).toFixed(1));
  if (res < 16) return 'Underweight (Severe thinness)';
  else if (res <= 16.9) return 'Underweight (Moderate thinness)';
  else if (res <= 18.4) return 'Underweight (Mild thinness)';
  else if (res <= 24.9) return 'Normal (healthy weight)';
  else if (res <= 29.9) return 'Overweight (Pre-obese)';
  else if (res <= 34.9) return 'Obese (Class I)';
  else if (res <= 39.9) return 'Obese (Class II)';
  else return 'Obese (Class III)';
}

try {
  verifyArgs()
}
catch (err: unknown) {
  let errorMessage = "Something went wrong"
  if (err instanceof Error) errorMessage = err.message
  console.log(errorMessage)
  process.exit(1)
}

console.log(calculateBmi({ height: Number(height), weight: Number(weight) }));