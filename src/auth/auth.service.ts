import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(body: any) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: body.username,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User tidak ditemukan');
    }

    const isPasswordValid = await bcrypt.compare(
      body.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Password salah');
    }

    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
    };

    return {
      message: 'Login berhasil',
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}