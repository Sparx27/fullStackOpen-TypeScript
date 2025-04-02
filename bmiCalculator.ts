type HeightWeight = {
  height: number;
  weight: number;
}

function calculateBmi(info: HeightWeight): string {
  if(info.weight == 0) throw new Error('Weight can not be 0');
  let res: number = parseFloat( (info.weight / Math.pow(info.height/100, 2)).toFixed(1) );
  if(res < 16) return 'Underweight (Severe thinness)';
  else if(res <= 16.9) return 'Underweight (Moderate thinness)';
  else if(res <= 18.4) return 'Underweight (Mild thinness)';
  else if(res <= 24.9) return 'Normal (healthy weight)';
  else if(res <= 29.9) return 'Overweight (Pre-obese)';
  else if(res <= 34.9) return 'Obese (Class I)';
  else if(res <= 39.9) return 'Obese (Class II)';
  else return 'Obese (Class III)';
}

console.log(calculateBmi({ height: 180, weight: 75 }));