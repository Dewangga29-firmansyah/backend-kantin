import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { StanModule } from './stan/stan.module';
import { TransaksiModule } from './transaksi/transaksi.module';


@Module({
  imports: [PrismaModule, UserModule, AuthModule,  MenuModule, StanModule, TransaksiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
