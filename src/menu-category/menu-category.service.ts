import { CreateMenuCategory } from './dto/CreateMenuCategory.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuCategoryService {
  constructor(private prisma: PrismaService) {}

  getMenuCategoires(location_id: number) {
    const menuCategories = this.prisma.menuCategory.findMany({
      where: {
        locationId: location_id,
      },
    });
    return menuCategories;
  }

  createMenuCategory(
    location_id: number,
    dto: CreateMenuCategory,
  ): Promise<any> {
    const newMenuCategory = this.prisma.menuCategory.create({
      data: {
        name: dto.name,
        locationId: location_id,
      },
    });

    return newMenuCategory;
  }

  updateMenuCategory(
    menu_category_id: number,
    dto: CreateMenuCategory,
  ): Promise<any> {
    const updatedMenuCategory = this.prisma.menuCategory.update({
      where: {
        id: menu_category_id,
      },
      data: {
        ...dto,
      },
    });

    return updatedMenuCategory;
  }

  deleteMenuCategory(menu_category_id: number): Promise<any> {
    const deletedMenuCategory = this.prisma.menuCategory.delete({
      where: {
        id: menu_category_id,
      },
    });

    return deletedMenuCategory;
  }
}
