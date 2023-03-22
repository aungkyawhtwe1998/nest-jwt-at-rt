import { PrismaService } from './../prisma/prisma.service';
import { Injectable, Delete } from '@nestjs/common';
import { CreateMenuItem, UpdateMenuItem } from './dto';

@Injectable()
export class MenuItemService {
  constructor(private prisma: PrismaService) {}

  getMenuItemsByCategoryId(menu_category_id: number) {
    const menus = this.prisma.menuItem.findMany({
      where: {
        menuCategoryId: menu_category_id,
      },
    });
    return menus;
  }

  createMenuItem(menu_category_id: number, dto: CreateMenuItem) {
    const newMenu = this.prisma.menuItem.create({
      data: {
        ...dto,
      },
    });
    return newMenu;
  }

  updateMenuItem(menu_id: number, dto: UpdateMenuItem) {
    const updatedMenu = this.prisma.menuItem.create({
      data: {
        ...dto,
      },
    });
    return updatedMenu;
  }

  deleteMenuItem(menu_item_id: number) {
    const deletedMenu = this.prisma.menuItem.delete({
      where: {
        id: menu_item_id,
      },
    });
    return deletedMenu;
  }
}
