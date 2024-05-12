import { Injectable } from '@nestjs/common';
import { Posts } from '@prisma/client';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class PostsService {

  async createNewPost(data: any): Promise<Posts> {
    return await prisma.posts.create({
      data: {
        title: data.title,
        description: data.description,
        imgUrl: data.image,
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