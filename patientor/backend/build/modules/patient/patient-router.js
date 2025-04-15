"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patient_controller_1 = require("./patient-controller");
const patientRouter = (0, express_1.Router)();
patientRouter.get('/', patient_controller_1.getAll);
patientRouter.post('/', patient_controller_1.add);
exports.default = patientRouter;
