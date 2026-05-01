import { ApiProperty } from '@nestjs/swagger';

export class CreateStanDto {
  @ApiProperty()
  nama_stan: string;

  @ApiProperty()
  nama_pemilik: string;

  @ApiProperty()
  telp: string;

  @ApiProperty()
  id_user: number;
}