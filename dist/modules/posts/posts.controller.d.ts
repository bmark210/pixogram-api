import { PostsService } from './posts.service';
import { ICreatePostDto, IUpdatePostDto } from './dto';
import { IPostsFilter } from './interfaces';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(filter: IPostsFilter): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string;
        imgUrl: string;
        location: string;
        userId: number;
    }[]>;
    createNewPost(body: ICreatePostDto): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string;
        imgUrl: string;
        location: string;
        userId: number;
    }>;
    getPostById(id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string;
        imgUrl: string;
        location: string;
        userId: number;
    }>;
    updatePost(body: IUpdatePostDto, id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string;
        imgUrl: string;
        location: string;
        userId: number;
    }>;
    deletePost(id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string;
        imgUrl: string;
        location: string;
        userId: number;
    }>;
}
