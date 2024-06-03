import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { ICreatePostDto, IUpdatePostDto } from './dto';
import { IPostsFilter } from './interfaces';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(@Query() filter: IPostsFilter) {
    return this.postsService.getPosts(filter);
  }

  @Post('new')
  createNewPost(@Body() body: ICreatePostDto) {
    return this.postsService.createNewPost(body);
  }

  @Get(':id')
  getPostById(@Param('id', ParseIntPipe) id: number) {
    let post = this.postsService.getPostById(id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  @Put(':id')
  updatePost(@Body() body: IUpdatePostDto, @Query() id: number) {
    return this.postsService.updatePost(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.deletePost(id);
  }
}
