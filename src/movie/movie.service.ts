/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Movie } from 'src/schemas/movie.schema';
import { Query } from 'express-serve-static-core'

@Injectable()
export class MovieService {
    constructor(
        @InjectModel(Movie.name)
        private movieModel: mongoose.Model<Movie>
    ) {}


    async findAll(query: Query): Promise<Movie []> {
        console.log(query)
        
        const conditions: any = {};

        if (query.title) {
            conditions.title = { $regex: query.title, $options: 'i' };
        }

        if (query.genre) {
            conditions.genre = { $regex: query.genre, $options: 'i' };
        }

        const movies = await this.movieModel.find(conditions);
        return movies;
    }

    async create(movie: Movie): Promise<Movie> {
        const res = await this.movieModel.create(movie);
        return res;
    }

    // async search(title: string, genre: string): Promise<Movie[]> {
    //     const query: any = {};
    //     if (title) {
    //         query.title = { $regex: title, $options: 'i' }; // Case-insensitive title search
    //     }
    //     if (genre) {
    //         query.genre = { $regex: genre, $options: 'i' }; // Case-insensitive genre search
    //     }
    //     return this.movieModel.find(query).exec();
    // }




    async updateById(id: string, movie: Movie): Promise<Movie>{
        return await this.movieModel.findByIdAndUpdate(id, movie, {
            new: true,
            runValidators: true
        })
    }

    async deleteById(id: string): Promise<Movie>{
        return this.movieModel.findByIdAndDelete(id)
    }
}
