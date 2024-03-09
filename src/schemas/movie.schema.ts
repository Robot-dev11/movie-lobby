/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"


export enum Genre {
    DRAMA = 'Drama',
    COMEDY= 'Comedy',
    HORROR = 'Horror',
    ACTION = 'Action',
    ROMANCE = 'Romance'
}


@Schema({
    timestamps: true
})
export class Movie{
    @Prop()
    title: string;

    @Prop()
    genre: Genre []

    @Prop()
    rating: number

    @Prop()
    streaming_link: string
}

export const MovieSchema = SchemaFactory.createForClass(Movie);