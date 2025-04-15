"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.getAll = void 0;
const patients_1 = __importDefault(require("../../data/patients"));
const uuid_1 = require("uuid");
const patient_utils_1 = require("./patient-utils");
const patients = patients_1.default;
const getAll = () => patients.map((p) => (0, patient_utils_1.toPublicPatientInfo)(p));
exports.getAll = getAll;
const add = (data) => {
    const toAdd = {
        id: (0, uuid_1.v1)(),
        ...data
    };
    return (0, patient_utils_1.toPublicPatientInfo)(toAdd);
};
exports.add = add;
