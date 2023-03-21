import { IsOptional } from 'class-validator';
import { IsNotEmpty , IsString } from 'class-validator';

export class AuthDto {

  @IsOptional()
  @IsString()
  username?: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
