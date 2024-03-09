/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Movie } from 'src/schemas/movie.schema';

@Injectable()
export class MovieService {
    constructor(
        @InjectModel(Movie.name)
        private movieModel: mongoose.Model<Movie>
    ) {}


    async findAll(): Promise<Movie []> {
        const movies = await this.movieModel.find();
        return movies;
    }

    async create(movie: Movie): Promise<Movie> {
        const res = await this.movieModel.create(movie);
        return res;
    }

    async search(title: string, genre: string): Promise<Movie[]> {
        const query: any = {};
        if (title) {
            query.title = { $regex: title, $options: 'i' }; // Case-insensitive title search
        }
        if (genre) {
            query.genre = { $regex: genre, $options: 'i' }; // Case-insensitive genre search
        }
        return this.movieModel.find(query).exec();
    }

    async updateById(id: string, movie: Movie): Promise<Movie>{
        return await this.movieModel.findByIdAndUpdate(id, movie, {
            new: true,
            runValidators: true
        })
    }
}
