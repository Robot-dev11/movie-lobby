/* eslint-disable prettier/prettier */

import { Genre } from "src/schemas/movie.schema";


export class UpdateMovieDto {
    readonly title: string;
    readonly genre: Genre [];
    readonly rating: number;
    readonly streaming_link: string;
}