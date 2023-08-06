import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieController } from './movie.controller';

@Module({
  controllers: [MovieController],
  providers: [MoviesService],
})
export class MoviesModule {}
