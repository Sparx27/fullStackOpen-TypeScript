"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.getAll = void 0;
const diagnoses_1 = __importDefault(require("../../data/diagnoses"));
const uuid_1 = require("uuid");
const diagnoses = diagnoses_1.default;
const getAll = () => diagnoses_1.default;
exports.getAll = getAll;
const add = (data) => {
    const newDiagnose = {
        code: (0, uuid_1.v1)(),
        ...data,
    };
    diagnoses.push(newDiagnose);
    return newDiagnose;
};
exports.add = add;
