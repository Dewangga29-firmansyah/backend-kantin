import { ApiProperty } from '@nestjs/swagger';
import { JenisMenu } from '@prisma/client';

export class CreateMenuDto {
  @ApiProperty()
  nama_makanan: string;

  @ApiProperty()
  harga: number;

  @ApiProperty({ enum: JenisMenu })
  jenis: JenisMenu;

  @ApiProperty({ required: false })
  foto?: string;

  @ApiProperty()
  deskripsi: string;

  @ApiProperty()
  id_stan: number;
}