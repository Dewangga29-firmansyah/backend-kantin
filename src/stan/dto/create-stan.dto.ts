import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateStanDto {
  @IsNotEmpty()
  @IsString()
  nama_stan: string;

  @IsNotEmpty()
  @IsString()
  nama_pemilik: string;

  @IsNotEmpty()
  @IsString()
  telp: string;

  @IsNotEmpty()
  @IsNumber()
  id_user: number;
}