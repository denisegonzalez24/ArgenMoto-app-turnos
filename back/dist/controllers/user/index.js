"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = exports.getUserById = exports.getAllUsers = void 0;
var getAllUsers = function (req, res) {
    res.send("Obtener el listado de todos los usuarios");
};
exports.getAllUsers = getAllUsers;
var getUserById = function (req, res) {
    var userId = req.params.id;
    res.send("Obtener el detalle del usuario con ID ".concat(userId));
};
exports.getUserById = getUserById;
var registerUser = function (req, res) {
    res.send("Registro de un nuevo usuario");
};
exports.registerUser = registerUser;
var loginUser = function (req, res) {
    res.send("Login del usuario a la aplicación");
};
exports.loginUser = loginUser;
