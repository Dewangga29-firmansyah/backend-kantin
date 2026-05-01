import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('admin-stan')
  createAdminStan(@Body() body: any) {
    return this.userService.createAdminStan(body);
  }

  @Post('siswa')
  createSiswa(@Body() body: any) {
    return this.userService.createSiswa(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}