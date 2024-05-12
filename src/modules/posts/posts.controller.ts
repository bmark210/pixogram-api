import { IPostsFilter } from './../../interfaces/posts.interface';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ICreatePostDto } from 'src/interfaces/posts.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get() 
  getPosts(@Query() filter: IPostsFilter) {
    return this.postsService.getPosts(filter);
  }

  @Post("new")
  createNewPost(@Body() body: ICreatePostDto) {
    return this.postsService.createNewPost(body);
  }
}