import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusTransaksi } from '@prisma/client'; // 🔥 WAJIB

@Injectable()
export class TransaksiService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const { id_stan, id_siswa, items } = data;

    return this.prisma.transaksi.create({
      data: {
        id_stan,
        id_siswa,
        status: StatusTransaksi.belum_dikonfirm, // 🔥 FIX enum
        detail_transaksi: {
          create: items.map((item) => ({
            id_menu: item.id_menu,
            qty: item.qty,
            harga_beli: item.harga,
          })),
        },
      },
      include: {
        detail_transaksi: true,
      },
    });
  }

  findAll() {
    return this.prisma.transaksi.findMany({
      include: {
        stan: true,
        siswa: true,
        detail_transaksi: {
          include: { menu: true },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.transaksi.findUnique({
      where: { id },
      include: {
        detail_transaksi: true,
      },
    });
  }

  // 🔥 FIX DI SINI
  updateStatus(id: number, status: StatusTransaksi) {
    return this.prisma.transaksi.update({
      where: { id },
      data: { status },
    });
  }

  remove(id: number) {
    return this.prisma.transaksi.delete({
      where: { id },
    });
  }
}