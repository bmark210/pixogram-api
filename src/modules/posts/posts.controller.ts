import { IPostsFilter, IUpdatePostDto } from './../../interfaces/posts.interface';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
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
  getPostById(@Param('id') id: string) {

    let postId = parseInt(id);
    let post = this.postsService.getPostById(postId);

    if(!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  @Put(":id")
  updatePost(@Body() body: IUpdatePostDto, @Query() id: number) {
    return this.postsService.updatePost(id, body);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    let postId = parseInt(id);
    return this.postsService.deletePost(postId);
  }
}