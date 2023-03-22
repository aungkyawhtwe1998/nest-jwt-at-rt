import { EditCompanyDto } from './dto';
import { PrismaService } from './../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyService;

  let prismaService: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyService,
        {
          provide: PrismaService,
          useValue: {
            company:{
              update: jest.fn(),
            }
          },
        },
      ],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('editCompanyById', () => {
    // it('should throw ForbiddenException if user does not own the company', async()=>{
    //   const userId= 4;
    //   const companyId = 2;
    //   const dto = {
    //     name: "Updated Company"
    //   };
    //   jest.spyOn(prismaService.company, 'findUnique').mockResolvedValueOnce({
    //     id:companyId,
    //     userId: 222
    //   });
    //   await expect(service.editCompanyById(userId, companyId, dto)).rejects.toThrow(ForbiddenException);

    // });

    

  });


});
