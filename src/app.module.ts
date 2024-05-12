import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './modules/prisma.service';

@Module({
  imports: [UserModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
