"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewDiagnose = void 0;
const general_validators_1 = require("../../utils/validators/general-validators");
const parseName = (value) => {
    if (!(0, general_validators_1.isString)(value))
        throw new Error('Incorrect name format');
    return value;
};
const parseLatin = (value) => {
    if (!(0, general_validators_1.isString)(value))
        throw new Error('Incorrect latin format');
    return value;
};
const toNewDiagnose = (obj) => {
    if (!obj || typeof obj != 'object')
        throw new Error('Incorrect or missing data');
    if ('name' in obj) {
        let latin;
        if ('latin' in obj)
            latin = parseLatin(obj.latin);
        const toAdd = {
            name: parseName(obj.name),
        };
        if (latin)
            toAdd.latin = latin;
        return toAdd;
    }
    throw new Error('Some data is missing');
};
exports.toNewDiagnose = toNewDiagnose;
