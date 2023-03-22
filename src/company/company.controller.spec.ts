import { Test } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { EditCompanyDto } from './dto';
import { AtGuard } from '../common/guards/at.guard';
import { ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

describe('CompanyController', () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompanyService, AtGuard, PrismaService],
    }).compile();

    companyService = moduleRef.get<CompanyService>(CompanyService);
    companyController = moduleRef.get<CompanyController>(CompanyController);
  });

  // describe('getCompany', () => {
  //   it('should return a company for a valid user', async () => {
  //     const mockUserId = 1;
  //     const mockCompany = {
  //       id: 1,
  //       name: 'ACME Inc.',
  //       address: '123 Main St.',
  //       currency: 'USD',
  //       taxRate: 10,
  //       serviceChargeRate: 5,
  //       imageUrl: 'https://example.com/image.png',
  //       coverPhoto: 'https://example.com/cover.png',
  //       userId: mockUserId,
  //     };
  //     jest.spyOn(companyService, 'getCompany').mockResolvedValue(mockCompany);

  //     const result = await companyController.getCompany(mockUserId);

  //     expect(result).toEqual(mockCompany);
  //   });
  // });

  describe('editCompanyById', () => {
    it('should throw ForbiddenException if the user does not have access to the company', async () => {
      const mockUserId = 1;
      const mockCompanyId = 4;
      const mockDto: EditCompanyDto = { name: 'New Name' };
      // const mockCompany = {
      //   id: 1,
      //   name: 'ACME Inc.',
      //   address: '123 Main St.',
      //   currency: 'USD',
      //   taxRate: 10,
      //   serviceChargeRate: 5,
      //   imageUrl: 'https://example.com/image.png',
      //   coverPhoto: 'https://example.com/cover.png',
      //   userId: 2,
      // };
      jest
        .spyOn(companyService, 'editCompanyById')
        .mockRejectedValue(new ForbiddenException());

      await expect(
        companyController.editCompanyById(mockUserId, mockCompanyId, mockDto),
      ).rejects.toThrow(ForbiddenException);
    });

    it('should return the updated company if the user has access to the company', async () => {
      const mockUserId = 1;
      const mockCompanyId = 1;
      const mockDto: EditCompanyDto = { name: 'New Name' };
      const mockCompany = {
        name: 'ACME Inc.',
        address: '123 Main St.',
        currency: 'USD',
        taxRate: 10,
        serviceChargeRate: 5,
        imageUrl: 'https://example.com/image.png',
        coverPhoto: 'https://example.com/cover.png',
      };
      // jest
      //   .spyOn(companyService, 'editCompanyById')
      //   .mockResolvedValue(mockCompany);

      const result = await companyController.editCompanyById(
        mockUserId,
        mockCompanyId,
        mockDto,
      );

      expect(result).toEqual(mockCompany);
    });
  });
});