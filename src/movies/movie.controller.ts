import { Controller, Get } from '@nestjs/common';

@Controller('/movies')
export class MovieController {
  @Get()
  getMovies(): string {
    return 'hello movies';
  }
}
