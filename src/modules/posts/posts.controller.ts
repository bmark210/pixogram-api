import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts() {
    console.log('get posts')
    return this.postsService.getAllPosts();
  }


  @Post("new")
  createNewPost(@Body() body: any) {
    return this.postsService.createNewPost(body);
  }
}