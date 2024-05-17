import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { comments } from './schema/comment.schema';


@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(comments.name)
    private commentsModel:mongoose.Model<comments>,
    ) {}

    async findAll(){
      const comments = await this.commentsModel.find();
      return comments;

    }

    async create(comments:comments):Promise<comments>{
      const res = await this.commentsModel.create(comments)
      return res

    }
    // ... (other imports and service setup)

    
    async update(id: string): Promise<comments> {
      const updatedComment = await this.commentsModel.findByIdAndUpdate(id,  { new: true }).exec();

      if (!updatedComment) {
        throw new NotFoundException(`Item with ID "${id}" not found`);
      }

      return updatedComment;
    }

    async remove(id: string): Promise<any> {
      const result = await this.commentsModel.findByIdAndDelete(id).exec();
  
      if (!result) {
        throw new NotFoundException(`Item with ID "${id}" not found`);
      }
  
      return result;
    }

    
}

