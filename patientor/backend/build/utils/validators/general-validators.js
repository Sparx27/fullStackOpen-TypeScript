"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
const isString = (value) => value instanceof String || typeof value === 'string';
exports.isString = isString;
