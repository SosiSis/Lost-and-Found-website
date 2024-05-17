import { comments } from './schema/comment.schema';

import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';

import { CommentsService } from './comments.service';
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  async getAllitems(): Promise<comments[]> {
    return this.commentsService.findAll();
  }
  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  async createComment(
    @Body('message') message: string,
    @UploadedFile() file: Express.Multer.File,
  ) {


    const createdComment = await this.commentsService.create({
      message,
    });
    return createdComment;
  }

  @Put(':id') // Route for updating an item
  async updateComment(
    @Param('id') id: string,
    @Body() 
  )
//   : Promise<comments> {
//     return this.commentsService;
//   }

  @Delete(':id') // Route for deleting an item
  async deleteComment(
    @Param('id') id: string
  )
//   : Promise<comments> {
//     return this.commentsService;
//   }
}
