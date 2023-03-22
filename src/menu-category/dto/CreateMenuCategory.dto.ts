import { IsString } from 'class-validator';
export class CreateMenuCategory {
    @IsString()
    name: string
}