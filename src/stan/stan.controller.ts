import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { StanService } from './stan.service';
import { CreateStanDto } from './dto/create-stan.dto';

@Controller('stan')
export class StanController {
  constructor(private readonly stanService: StanService) {}

  @Post()
create(@Body() body: CreateStanDto) {
  return this.stanService.create(body);
}

  @Get()
  findAll() {
    return this.stanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stanService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.stanService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stanService.remove(Number(id));
  }
}