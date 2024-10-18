"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turno = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("./user");
var turnoInterface_1 = require("../interface/turnoInterface");
var Turno = (function () {
    function Turno() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Turno.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Turno.prototype, "userId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: Date }),
        __metadata("design:type", Date)
    ], Turno.prototype, "fechaHora", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: Date }),
        __metadata("design:type", Date)
    ], Turno.prototype, "fechaCancelacion", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: turnoInterface_1.Status, default: turnoInterface_1.Status.ACTIVE }),
        __metadata("design:type", String)
    ], Turno.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }, function (user) { return user.turnos; }),
        __metadata("design:type", user_1.User)
    ], Turno.prototype, "user", void 0);
    Turno = __decorate([
        (0, typeorm_1.Entity)({ name: "turno" })
    ], Turno);
    return Turno;
}());
exports.Turno = Turno;
