import { Delete, ParseIntPipe, Patch } from '@nestjs/common';
import { AtGuard } from '../common/guards/at.guard';
import { LocationService } from './location.service';
import { CreateLocation } from './dto/CreateLocation.dto';
import { Controller, Get, Post, HttpCode, HttpStatus, Body, Query, UseGuards } from '@nestjs/common';

@UseGuards(AtGuard)
@Controller('location')
export class LocationController {
    constructor(private locationService:LocationService){}

    @Get()
    getLocations(@Query('company_id', ParseIntPipe) company_id: number){
        return this.locationService.getLocations(company_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createLocation(@Query('company_id', ParseIntPipe) company_id: number, @Body() dto: CreateLocation):Promise<any>{
        return this.locationService.createLocation(company_id, dto);
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    updateLocation(@Query('location_id', ParseIntPipe) location_id: number, @Body() dto: CreateLocation):Promise<any>{
        return this.locationService.updateLocation(location_id, dto);
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    deleteLocation(@Query('location_id', ParseIntPipe) location_id: number) {
        return this.locationService.deleteLocation(location_id);
    }
}
