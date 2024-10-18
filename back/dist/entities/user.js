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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var credencial_1 = require("./credencial");
var turnos_1 = require("./turnos");
var User = (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true, type: "varchar" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "date" }),
        __metadata("design:type", Date)
    ], User.prototype, "birthdate", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return credencial_1.Credential; }),
        (0, typeorm_1.JoinColumn)({ name: "credencialid" }),
        __metadata("design:type", credencial_1.Credential)
    ], User.prototype, "credential", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return turnos_1.Turno; }, function (turno) { return turno.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "turnos", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)({ name: "users" })
    ], User);
    return User;
}());
exports.User = User;
