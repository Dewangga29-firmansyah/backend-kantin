import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.menu.create({ data });
  }

  findAll() {
    return this.prisma.menu.findMany({
      include: { stan: true },
    });
  }

  findOne(id: number) {
    return this.prisma.menu.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.menu.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.menu.delete({
      where: { id },
    });
  }
}