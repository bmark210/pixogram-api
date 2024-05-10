import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll(): string[] {
    return ['dragons', 'kittens', 'unicorns'];
  }
}
