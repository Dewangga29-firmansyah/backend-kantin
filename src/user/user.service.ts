import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createAdminStan(body: any) {
    const hashPassword = await bcrypt.hash(body.password, 10);

    return this.prisma.user.create({
      data: {
        username: body.username,
        password: hashPassword,
        role: 'admin_stan',
      },
    });
  }

  async createSiswa(body: any) {
    const hashPassword = await bcrypt.hash(body.password, 10);

    return this.prisma.user.create({
      data: {
        username: body.username,
        password: hashPassword,
        role: 'siswa',
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}