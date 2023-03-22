import { EditCompanyDto } from './dto/EditCompany.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class CompanyService {
    constructor (private prisma: PrismaService){}
    
    getCompany(userId: number){
        return this.prisma.company.findFirst({
            where:
            {
                userId
            },
        });
    }

    async editCompanyById(userId: number, companyId: number, dto: EditCompanyDto){

        const company = await this.prisma.company.findUnique({
            where: {
                id: companyId,
            }
        });

        if(!company || company.userId !== userId)
            throw new ForbiddenException(
                'Access to resources denied',
            );

            return this.prisma.company.update({
                where: {
                    id: companyId
                },
                data:{
                    ...dto,
                }
            });
    }
}
