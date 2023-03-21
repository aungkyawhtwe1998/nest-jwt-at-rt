import { AtGuard } from './../common/guards/at.guard';
import { EditCompanyDto } from './dto';
import { GetCurrentUserId } from 'src/common/decorators';
import { CompanyService } from './company.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  Patch,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
@UseGuards(AtGuard)
@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get('/')
  getCompany(@GetCurrentUserId() userId: number) {
    return this.companyService.getCompany(userId);
  }

  @Patch('edit/:id')
  editCompanyById(
    @GetCurrentUserId() userId: number,
    @Req() req: Request,
    @Body() dto: EditCompanyDto,
    @Body('serviceChargeRate', new ParseIntPipe()) serviceChargeRate: number,
    @Body('taxRate', new ParseIntPipe()) taxRate: number,
    @Param('id', ParseIntPipe) companyId: number,
  ) {
    console.log('company update ', companyId);
    dto.serviceChargeRate = serviceChargeRate;
    dto.taxRate = taxRate;
    return this.companyService.editCompanyById(userId, companyId, dto);
  }
}
