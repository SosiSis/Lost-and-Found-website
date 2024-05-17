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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt = require("bcryptjs");
const mongoose_2 = require("mongoose");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async signUp(signUpDto) {
        const { email, password } = signUpDto;
        let roles = ['user'];
        if (email === process.env.ADMIN_EMAIL) {
            const isPasswordMatched = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
            if (isPasswordMatched) {
                roles = ['admin'];
            }
            else {
                throw new common_1.UnauthorizedException('Invalid credentials for admin signup.');
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userModel.create({
            ...signUpDto,
            password: hashedPassword,
            roles,
        });
        const token = this.jwtService.sign({ id: newUser._id, roles: newUser.roles });
        return { token };
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        if (email === process.env.ADMIN_EMAIL) {
            if (await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)) {
                const adminUser = await this.userModel.findOne({ email }).exec();
                if (!adminUser) {
                    throw new common_1.UnauthorizedException('Admin user does not exist in the database.');
                }
                const adminToken = this.jwtService.sign({ id: adminUser._id, roles: adminUser.roles });
                return { token: adminToken };
            }
            else {
                throw new common_1.UnauthorizedException('Invalid email or password.');
            }
        }
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        const token = this.jwtService.sign({ id: user._id, roles: user.roles });
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map