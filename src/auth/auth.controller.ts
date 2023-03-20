import { GetCurrentUser, GetCurrentUserId, Public } from './../common/decorators';
import { AtGuard } from './../common/guards/at.guard';
import { RtGuard } from './../common/guards/rt.guard';
import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { Tokens } from './types';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body()dto: AuthDto):Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @UseGuards(AtGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: number) {
    // const user = req.user;
    return this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(@GetCurrentUser('refreshToken') refreshToken:string, @GetCurrentUserId() userId:number) {
    // const user = req.user
    console.log(refreshToken, userId)
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
