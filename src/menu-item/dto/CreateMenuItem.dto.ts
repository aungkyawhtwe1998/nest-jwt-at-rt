import { Optional } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsInt, IsString, IsOptional } from "class-validator";

export class CreateMenuItem{
    @IsString()
    name: string

    @IsInt()
    @Transform(({value})=>parseInt(value))
    price: number

    @IsInt()
    @Transform(({value})=> parseInt(value))
    discount: number

    @IsInt()
    @Transform(({value})=>parseInt(value))
    menuCategoryId: number

    @IsOptional()
    @IsString()
    imageUrl: string

    @IsOptional()
    @IsString()
    description: string



}