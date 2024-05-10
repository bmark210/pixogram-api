import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.findAll();
  }
  // @Post("/new")
  // createNewPost(@Body() body: any) {
  //   return this.postsService.createNewPost(body);
  // }
}
