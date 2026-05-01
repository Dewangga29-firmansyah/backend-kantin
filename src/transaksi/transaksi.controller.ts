import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { TransaksiService } from './transaksi.service';
import { StatusTransaksi } from '@prisma/client';
import { CreateTransaksiDto } from './dto/create-transaksi.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth() // 🔥 ini yang bikin gembok muncul
@Controller('transaksi')

@Controller('transaksi')
export class TransaksiController {
  constructor(private readonly transaksiService: TransaksiService) {}

  @Post()
create(@Body() body: CreateTransaksiDto) {
  return this.transaksiService.create(body);
}

  @Get()
  findAll() {
    return this.transaksiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transaksiService.findOne(Number(id));
  }

  // 🔥 FIX DI SINI
  @Put(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: StatusTransaksi,
  ) {
    return this.transaksiService.updateStatus(Number(id), status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transaksiService.remove(Number(id));
  }
}