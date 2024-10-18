"use strict";
<<<<<<< HEAD
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENVIRONMENT = exports.HOST = exports.PROTO = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./src/config/.env" });
var ENVIRONMENT = process.env.ENVIRONMENT;
exports.ENVIRONMENT = ENVIRONMENT;
var PORT = Number(process.env.PORT);
exports.PORT = PORT;
var PROTO = process.env.PROTO || "http";
exports.PROTO = PROTO;
var HOST = process.env.HOST || "localhost";
exports.HOST = HOST;
=======
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./envs"), exports);
__exportStar(require("./data-source"), exports);
>>>>>>> 4798aac
