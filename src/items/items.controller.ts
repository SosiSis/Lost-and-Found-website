import { items } from './schemas/items.schemas';

import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { updateItemDto } from './dto/update-item.dto'; // Assume you have a DTO for updating items
import { ItemsService } from './items.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles/role.guard';
import { Roles } from 'src/auth/roles/role.decorator';
import { Role } from 'src/auth/roles/role.enum';
@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllitems(): Promise<items[]> {
    return this.itemsService.findAll();
  }
  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  async createItem(
    @Body('description') description: string,
    @UploadedFile() file: Express.Multer.File,
  ) {


    const createdItem = await this.itemsService.create({
      description, picture: file.buffer,
    });
    return createdItem;
  }

  @Put(':id') // Route for updating an item
  async updateItem(
    @Param('id') id: string,
    @Body() updateData: updateItemDto
  ): Promise<items> {
    return this.itemsService.update(id, updateData);
  }
  
  @Delete(':id') // Route for deleting an item
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Admin)
  async deleteItem(
    @Param('id') id: string
  ): Promise<items> {
    return this.itemsService.remove(id);
  }
}
