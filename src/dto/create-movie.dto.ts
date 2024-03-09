/* eslint-disable prettier/prettier */

import { Genre } from "src/schemas/movie.schema";


export class CreateMovieDto {
    readonly title: string;
    readonly genre: Genre [];
    readonly rating: number;
    readonly streaming_link: string;
}