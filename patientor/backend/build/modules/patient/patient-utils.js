"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPublicPatientInfo = exports.toNewPatient = void 0;
const general_validators_1 = require("../../utils/validators/general-validators");
const patient_types_1 = require("./patient-types");
const parseString = (value) => {
    if ((0, general_validators_1.isString)(value))
        return value.toString();
    throw new Error('Incorrect name format');
};
const parseDate = (value) => {
    if ((0, general_validators_1.isString)(value) && Boolean(Date.parse(value)))
        return value;
    throw new Error('Incorrect date of birth format');
};
const isGender = (value) => {
    return (0, general_validators_1.isString)(value) && Object.values(patient_types_1.Gender).some((g) => g === value);
};
const parseGender = (value) => {
    if (isGender(value))
        return value;
    throw new Error('Incorrect gender format');
};
const toNewPatient = (data) => {
    if (!data || typeof data !== 'object')
        throw new Error('Incorrect data or missing');
    if ('name' in data &&
        'dateOfBirth' in data &&
        'ssn' in data &&
        'gender' in data &&
        'occupation' in data) {
        const toAdd = {
            name: parseString(data.name),
            dateOfBirth: parseDate(data.dateOfBirth),
            ssn: parseString(data.ssn),
            gender: parseGender(data.gender),
            occupation: parseString(data.occupation)
        };
        return toAdd;
    }
    throw new Error('Some data is missing');
};
exports.toNewPatient = toNewPatient;
const toPublicPatientInfo = (patient) => {
    const { id, dateOfBirth, gender, name, occupation } = patient;
    return {
        id,
        dateOfBirth,
        gender,
        name,
        occupation
    };
};
exports.toPublicPatientInfo = toPublicPatientInfo;
