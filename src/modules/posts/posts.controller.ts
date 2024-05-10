import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post("/new")
  createNewPost(@Body() body: any) {
    return this.postsService.createNewPost(body);
  }
}