import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiBearerAuth() 
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('admin')
createAdminStan(@Body() body: CreateUserDto) {
  return this.userService.createAdminStan(body);
}


  @Post('siswa')
createSiswa(@Body() body: CreateUserDto) {
  return this.userService.createSiswa(body);
}

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.createSiswa(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}