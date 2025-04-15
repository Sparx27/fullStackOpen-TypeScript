"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diagnose_controller_1 = require("./diagnose-controller");
const diagnoseRouter = (0, express_1.Router)();
diagnoseRouter.get('/', diagnose_controller_1.getAll);
diagnoseRouter.post('/', diagnose_controller_1.add);
exports.default = diagnoseRouter;
