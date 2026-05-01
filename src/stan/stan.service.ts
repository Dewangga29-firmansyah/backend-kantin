import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StanService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.stan.create({ data });
  }

  findAll() {
    return this.prisma.stan.findMany({
      include: { user: true, menu: true },
    });
  }

  findOne(id: number) {
    return this.prisma.stan.findUnique({
      where: { id },
      include: { menu: true },
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