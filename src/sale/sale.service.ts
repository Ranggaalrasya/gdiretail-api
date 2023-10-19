import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}
  create(createSaleDto: CreateSaleDto) {
    return this.prisma.sale.create({
      data: createSaleDto,
    });
  }

  findAll() {
    return this.prisma.sale.findMany();
  }

  findOne(id: number) {
    return this.prisma.sale.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.prisma.sale.update({
      where: {
        id: id,
      },
      data: updateSaleDto,
    });
  }

  remove(id: number) {
    return this.prisma.sale.delete({
      where: {
        id: id,
      },
    });
  }
}
