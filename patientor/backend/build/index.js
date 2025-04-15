"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnose_router_1 = __importDefault(require("./modules/diagnose/diagnose-router"));
const patient_router_1 = __importDefault(require("./modules/patient/patient-router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/ping', (_req, res) => {
    res.send('pong');
});
app.use('/api/diagnose', diagnose_router_1.default);
app.use('/api/patients', patient_router_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server running at port ', PORT);
});
