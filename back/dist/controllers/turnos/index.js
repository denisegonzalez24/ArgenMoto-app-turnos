"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelTurno = exports.scheduleTurno = exports.getTurnoById = exports.getAllTurnos = void 0;
var getAllTurnos = function (req, res) {
    res.send("Obtener el listado de todos los turnos");
};
exports.getAllTurnos = getAllTurnos;
var getTurnoById = function (req, res) {
    var turnoId = req.params.id;
    res.send("Obtener el detalle del turno con ID ".concat(turnoId));
};
exports.getTurnoById = getTurnoById;
var scheduleTurno = function (req, res) {
    res.send("Agendar un nuevo turno");
};
exports.scheduleTurno = scheduleTurno;
var cancelTurno = function (req, res) {
    res.send("Cambiar el estatus de un turno a 'cancelled'");
};
exports.cancelTurno = cancelTurno;
