import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty()
  nama_makanan: string;

  @ApiProperty()
  harga: number;

  @ApiProperty({ enum: ['makanan', 'minuman'] })
  jenis: string;

  @ApiProperty()
  foto: string;

  @ApiProperty()
  deskripsi: string;

  @ApiProperty()
  id_stan: number;
}