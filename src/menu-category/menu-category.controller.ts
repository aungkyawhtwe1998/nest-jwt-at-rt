import { CreateMenuCategory } from './dto/CreateMenuCategory.dto';
import { ParseIntPipe, Body } from '@nestjs/common';
import { AtGuard } from './../common/guards/at.guard';
import { Controller, UseGuards, Get, Post, Query, HttpCode, Patch, Delete, HttpStatus } from '@nestjs/common';
import { MenuCategoryService } from './menu-category.service';

@UseGuards(AtGuard)
@Controller('menu-category')
export class MenuCategoryController {
    constructor(private menuCategoryService:MenuCategoryService){}

    @Get()
    getMenuCategoires(@Query('location_id', ParseIntPipe) location_id: number){
        return this.menuCategoryService.getMenuCategoires(location_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createMenuCategory(@Query('location_id', ParseIntPipe) location_id: number, @Body() dto: CreateMenuCategory){
        return this.menuCategoryService.createMenuCategory(location_id, dto);
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    updateMenuCategory(@Query('menu_category_id', ParseIntPipe) menu_category_id: number, @Body() dto: CreateMenuCategory){
        return this.menuCategoryService.updateMenuCategory(menu_category_id, dto);
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    deleteMenuCategory(@Query('menu_category_id', ParseIntPipe) menu_category_id: number) {
        return this.menuCategoryService.deleteMenuCategory(menu_category_id);
    }
}
