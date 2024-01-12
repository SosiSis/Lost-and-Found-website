"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    fullname: { type: String, unique: true, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
exports.UserModel = mongoose_1.default.model('User', exports.UserSchema);
//# sourceMappingURL=user.interface.js.map