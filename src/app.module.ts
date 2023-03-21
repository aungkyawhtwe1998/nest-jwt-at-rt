import { AtGuard } from './common/guards';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), AuthModule, PrismaModule, TodoModule, CompanyModule],
  providers:[
    {
      provide:APP_GUARD,
      useClass:AtGuard
    }
  ]
})
export class AppModule {}
