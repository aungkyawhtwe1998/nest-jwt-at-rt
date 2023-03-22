import { IsString } from 'class-validator';
export class CreateLocation{
    @IsString()
    name: string
}