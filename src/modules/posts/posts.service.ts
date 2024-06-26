import { ForbiddenException, Injectable } from '@nestjs/common';
import { Posts } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { IPostsFilter } from 'src/interfaces/posts.interface';

@Injectable()
export class PostsService {

  constructor(private prisma: PrismaService) {}

  async createNewPost(data: any): Promise<Posts> {
    return await this.prisma.posts.create({
      data: {
        userId: data.userId,
        title: data.title,
        description: data.description,
        imgUrl: data.imgUrl,
      },
    });
  }

  async getPosts(filter: IPostsFilter): Promise<Posts[]> {
    return await this.prisma.posts.findMany(
      {
        where: {
          title: {
            contains: filter.searchText,
          },
        } ?? undefined,
        take: filter.limit ?? 10,
        skip: filter.offset ?? 0,
        orderBy: {
          [filter.sortBy]: filter.sortOrder,
        } ?? { createdAt: 'desc' },
      }
    );
  }

  async getPostById(id: number): Promise<Posts> {
    return await this.prisma.posts.findUnique({
      where: {
        id: id,
      },
    });
  }

  async updatePost(id: number, data: any): Promise<Posts | null> {
    const post = await this.getPostById(id);

    if (!post || post.userId !== data.userId) {
      throw new ForbiddenException('Access denied');
    }

    const updatedPost = await this.prisma.posts.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        description: data.description,
        imgUrl: data.imgUrl,
      },
    });
    return updatedPost;
  }


  async deletePost(id: number): Promise<Posts> {
    return await this.prisma.posts.delete({
      where: {
        id: id,
      },
    });
  }
}