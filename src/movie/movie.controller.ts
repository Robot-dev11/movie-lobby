/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Query, Put, Param  } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from 'src/schemas/movie.schema';
import { CreateMovieDto } from 'src/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/dto/update-movie.dto';

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
        movie: CreateMovieDto
    ): Promise<Movie>{
        return this.movieService.create(movie)
    }

    @Get('search')
    async searchMovies(
        @Query('title') title: string,
        @Query('genre') genre: string,
    ): Promise<Movie[]> {
        return this.movieService.search(title, genre);
    }

    @Put(':id')
    async updateMovieById(
        @Param('id') id: string,
        @Body() movie: UpdateMovieDto,
    ): Promise<Movie> {
        return this.movieService.updateById(id, movie)
    }

}
