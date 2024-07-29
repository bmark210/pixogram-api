import { Posts } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { IPostsFilter } from 'src/interfaces/posts.interface';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    createNewPost(data: any): Promise<Posts>;
    getPosts(filter: IPostsFilter): Promise<Posts[]>;
    getPostById(id: number): Promise<Posts>;
    updatePost(id: number, data: any): Promise<Posts | null>;
    deletePost(id: number): Promise<Posts>;
}
