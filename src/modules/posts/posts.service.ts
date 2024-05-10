import { Injectable } from '@nestjs/common';
import { Posts } from '@prisma/client';
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class PostsService {

  findAll(): Array<string> {
    return ['1', '2', '3'];
  }


  // async createNewPost(data: any): Promise<Posts> {
  //   return await prisma.posts.create({
  //     data: {
  //       title: data.title,
  //       description: data.description,
  //       imgUrl: data.image,
  //     },
  //   });
  // }
}
