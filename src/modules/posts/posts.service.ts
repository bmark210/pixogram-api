import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaClient, Prisma } from '@prisma/client'


@Injectable()
export class PostsService {
  private prisma = new PrismaClient()

  findAll(): string[] {
    return ['dragons', 'kittens', 'unicorns'];
  }

  // async createNewPost(data: any): Promise<Post> {
  //   return await this.prisma.post.create({
  //     data: {
  //       title: data.title,
  //       description: data.description,
  //       imgUrl: data.image,
  //     },
  //   });
  // }
}
