import { IsInt, IsOptional, IsString } from "class-validator";

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

    @IsInt()
    @IsOptional()
    taxRate: number;

    @IsInt()
    @IsOptional()
    serviceChargeRate: number;

    @IsString()
    @IsOptional()
    imageUrl?: string;

    @IsString()
    @IsOptional()
    coverPhoto?: string;
}