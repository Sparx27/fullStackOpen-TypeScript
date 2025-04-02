type Result = {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: Boolean;
  rating: number;
  ratingDescription: string;
}

/*
el número de días
el número de días de entrenamiento
el valor objetivo original
el tiempo promedio calculado
valor booleano que describe si se alcanzó el objetivo
una calificación entre los números 1-3 que indica qué tan bien se cumplen las horas. Puedes decidir la métrica por tu cuenta.
un valor de texto que explique la calificación, puedes inventar las explicaciones
*/
function calcRating(target: number, average: number): number {
  const preRes: number = average / target;
  if (preRes <= 0.5) return 1
  else if (preRes < 1) return 2
  return 3
}

function calcDescription(rating: number): string {
  if (rating === 1) return 'You could train more'
  if (rating === 2) return 'Not too bad but could be better'
  return 'Great job!'
}

function calculate(values: number[], target: number): Result {
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
  }

  return res
}

const arr1: number[] = [3, 0, 2, 4.5, 0, 3, 1]
const arr2: number[] = [3, 0, 2, 4.5, 3, 3, 2]
const arr3: number[] = [3, 3, 2, 4, 0, 3, 1, 0, 0]

console.log(calculate(arr1, 2))
console.log(calculate(arr2, 2))
console.log(calculate(arr3, 4))