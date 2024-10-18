"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
<<<<<<< HEAD
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("../routes"));
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use((0, morgan_1.default)("dev"));
server.use(express_1.default.json());
server.use("/", routes_1.default);
exports.default = server;
=======
var dotenv_1 = __importDefault(require("dotenv"));
var user_1 = __importDefault(require("../routes/user/user"));
var appointment_1 = __importDefault(require("../routes/appointment/appointment"));
var server_1 = require("./server");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/users', user_1.default);
app.use('/appointments', appointment_1.default);
if (require.main === module) {
    (0, server_1.serverInitializer)();
}
exports.default = app;
>>>>>>> 4798aac
