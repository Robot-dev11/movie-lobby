/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from 'src/schemas/movie.schema';

@Controller('movies')
export class MovieController {

    constructor(private movieService: MovieService) {}


    @Get()
    async findAll(): Promise<Movie[]>{
        return this.movieService.findAll();
    }

    @Post()
    async createMovie(
        @Body()
        movie
    ): Promise<Movie>{
        return this.movieService.create(movie)
    }
}
