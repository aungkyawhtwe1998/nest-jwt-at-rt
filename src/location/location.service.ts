import { CreateLocation } from './dto/CreateLocation.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async getLocations(company_id: number) {
    const locations = await this.prisma.locaton.findMany({
      where: {
        companyId: company_id,
      },
    });

    return locations;
  }

  async createLocation(company_id: number, dto: CreateLocation) {
    const newLocaton = await this.prisma.locaton.create({
      data: {
        companyId: company_id,
        name: dto.name,
      },
    });
    return newLocaton;
  }

  async updateLocation(location_id: number, dto: CreateLocation) {
    const updatedLocation = await this.prisma.locaton.update({
      where: {
        id: location_id,
      },
      data: {
        ...dto,
      },
    });
    return updatedLocation;
  }

  async deleteLocation(location_id: number) {
    const deletedLocation = await this.prisma.locaton.delete({
      where: {
        id: location_id,
      },
    });
    return deletedLocation;
  }
}
