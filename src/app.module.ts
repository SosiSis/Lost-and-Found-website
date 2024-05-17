import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/roles/role.guard';
import { ItemsModule } from './items/items.module';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
    MongooseModule.forRoot("mongodb://0.0.0.0:27017/lost_and_found"),
    UserModule,
    ItemsModule,
    AuthModule,
    CommentsModule],
    
    
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: RolesGuard,

  }],
})
export class AppModule {}
