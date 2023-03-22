import { Optional } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateMenuItem{
    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsInt()
    @Transform(({value})=>parseInt(value))
    price: number

    @IsOptional()
    @IsInt()
    @Transform(({value})=> parseInt(value))
    discount: number

    @IsOptional()
    @IsInt()
    @Transform(({value})=>parseInt(value))
    menuCategoryId: number

    @IsOptional()
    @Optional()
    @IsString()
    imageUrl: string

    @IsOptional()
    @Optional()
    @IsString()
    description: string



}