import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StanService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.stan.create({
      data: {
        nama_stan: data.nama_stan,
        nama_pemilik: data.nama_pemilik,
        telp: data.telp,
        id_user: data.id_user,
      },
    });
  }

  findAll() {
    return this.prisma.stan.findMany({
      include: { user: true },
    });
  }

  findOne(id: number) {
    return this.prisma.stan.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.stan.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.stan.delete({
      where: { id },
    });
  }
}