import { Injectable } from '@nestjs/common';
import { Posts } from '@prisma/client';
import { PrismaService } from 'src/services/Prisma';

@Injectable()
export class PostsService {

  constructor(private prisma: PrismaService) {}

  async createNewPost(data: any): Promise<Posts> {
    return await this.prisma.posts.create({
      data: {
        title: data.title,
        description: data.description,
        imgUrl: data.imgUrl,
      },
    });
  }

  getAllPosts(): Posts[] {
    return [{
      id: 1,
      title: 'title',
      description: 'description',
      imgUrl: 'image',
    }];
  }
}