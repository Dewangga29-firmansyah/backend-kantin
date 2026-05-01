import { Module } from '@nestjs/common';
import { StanController } from './stan.controller';
import { StanService } from './stan.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StanController],
  providers: [StanService],
})
export class StanModule {}