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
exports.Role = exports.Document = exports.UserSchema = exports.user = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
Object.defineProperty(exports, "Document", { enumerable: true, get: function () { return mongoose_2.Document; } });
const role_enum_1 = require("../roles/role.enum");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return role_enum_1.Role; } });
let user = class user extends mongoose_2.Document {
};
exports.user = user;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], user.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], user.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: [true, 'Duplicate email entered'] }),
    __metadata("design:type", String)
], user.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], user.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], user.prototype, "roles", void 0);
exports.user = user = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], user);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(user);
//# sourceMappingURL=user.schema.js.map