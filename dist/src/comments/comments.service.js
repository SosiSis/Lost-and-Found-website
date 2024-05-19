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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_schema_1 = require("./schema/comment.schema");
let CommentsService = class CommentsService {
    constructor(commentsModel) {
        this.commentsModel = commentsModel;
    }
    async findAll() {
        const comments = await this.commentsModel.find();
        return comments;
    }
    async create(comments) {
        const res = await this.commentsModel.create(comments);
        return res;
    }
    async update(id) {
        const updatedComment = await this.commentsModel.findByIdAndUpdate(id, { new: true }).exec();
        if (!updatedComment) {
            throw new common_1.NotFoundException(`Item with ID "${id}" not found`);
        }
        return updatedComment;
    }
    async remove(id) {
        const result = await this.commentsModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Item with ID "${id}" not found`);
        }
        return result;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_schema_1.comments.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], CommentsService);
//# sourceMappingURL=comments.service.js.map