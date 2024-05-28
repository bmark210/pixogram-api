import { IPostsFilter, IUpdatePostDto } from './../../interfaces/posts.interface';
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ICreatePostDto } from 'src/interfaces/posts.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get() 
  getPosts(@Query() filter: IPostsFilter) {
    console.log('is working');
    
    return this.postsService.getPosts(filter);
  }

  @Post("new")
  createNewPost(@Body() body: ICreatePostDto) {
    return this.postsService.createNewPost(body);
  }

  @Get(":id")
  getPostById(@Query('id') id: number) {
    console.warn(id, typeof id);
    
    return this.postsService.getPostById(id);
  }

  @Post(":id")
  updatePost(@Body() body: IUpdatePostDto, @Query() id: number) {
    return this.postsService.updatePost(id, body);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    let postId = parseInt(id);
    return this.postsService.deletePost(postId);
  }
}