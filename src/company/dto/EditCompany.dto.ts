import { ParseIntPipe } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditCompanyDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  currency?: string;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  taxRate?: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  serviceChargeRate?: number;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  coverPhoto?: string;
}
