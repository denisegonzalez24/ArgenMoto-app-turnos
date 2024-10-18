"use strict";
<<<<<<< HEAD
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var server_1 = __importDefault(require("./server"));
server_1.default.listen(config_1.PORT, config_1.HOST, function () {
    console.log("Servidor escuchando en el puerto ".concat(config_1.PORT));
=======
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var config_1 = require("./config");
var server_1 = require("./server/server");
config_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected");
    (0, server_1.serverInitializer)();
})
    .catch(function (err) {
    console.error("Error al inicializar la base de datos:", err);
>>>>>>> 4798aac
});
