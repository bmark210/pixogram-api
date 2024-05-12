import { IPostsFilter, IUpdatePostDto } from './../../interfaces/posts.interface';
import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
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

  @Get(":id")
  getPostById(@Query() id: number) {
    return this.postsService.getPostById(id);
  }

  @Post(":id")
  updatePost(@Body() body: IUpdatePostDto, @Query() id: number) {
    return this.postsService.updatePost(id, body);
  }

  @Post(":id/delete")
  deletePost(@Query() id: number) {
    return this.postsService.deletePost(id);
  }
}