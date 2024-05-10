import { Injectable } from '@nestjs/common';
import { Posts } from '@prisma/client';
import { PrismaClient, Prisma } from '@prisma/client'


@Injectable()
export class PostsService {
  private prisma = new PrismaClient()

  findAll(): string[] {
    return ['dragons', 'kittens', 'unicorns'];
  }

  async createNewPost(data: any): Promise<Posts> {
    return await this.prisma.posts.create({
      data: {
        title: data.title,
        description: data.description,
        imgUrl: data.image,
      },
    });
  }
}
