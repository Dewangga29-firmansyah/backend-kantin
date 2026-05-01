import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
  @ApiProperty()
  id_menu: number;

  @ApiProperty()
  qty: number;

  @ApiProperty()
  harga: number;
}

export class CreateTransaksiDto {
  @ApiProperty()
  id_stan: number;

  @ApiProperty()
  id_siswa: number;

  @ApiProperty({ type: [ItemDto] })
  items: ItemDto[];
}