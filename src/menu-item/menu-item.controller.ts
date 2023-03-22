import { UpdateMenuItem } from './dto/UpdateMenuItem.dto';
import { CreateMenuItem } from './dto/CreateMenuItem.dto';
import {
  HttpCode,
  ParseIntPipe,
  Post,
  HttpStatus,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { AtGuard } from './../common/guards/at.guard';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';

@UseGuards(AtGuard)
@Controller('menu-item')
export class MenuItemController {
  constructor(private menuItemService: MenuItemService) {}

  @Get()
  getMenuItemByCategoryId(
    @Query('menu_category_id', ParseIntPipe) menu_category_id: number,
  ) {
    return this.menuItemService.getMenuItemsByCategoryId(menu_category_id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createMenuItem(
    @Query('menu_category_id', ParseIntPipe) menu_category_id: number,
    @Body() dto: CreateMenuItem,
  ) {
    return this.menuItemService.createMenuItem(menu_category_id, dto);
  }

  @Patch()
  @HttpCode(HttpStatus.OK)
  updateMenuItem(
    @Query('menu_id', ParseIntPipe) menu_id: number,
    dto: UpdateMenuItem,
  ) {
    return this.menuItemService.updateMenuItem(menu_id, dto);
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  deleteMenuItem(@Query('menu_id', ParseIntPipe) menu_id: number) {
    return this.menuItemService.deleteMenuItem(menu_id);
  }
}
