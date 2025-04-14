export const isString = (value: unknown): value is string =>
  value instanceof String || typeof value === 'string';
