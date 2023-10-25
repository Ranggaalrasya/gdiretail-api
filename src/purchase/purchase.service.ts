import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PurchaseService {
  constructor(private prisma: PrismaService) {}
  async create(createPurchaseDto: CreatePurchaseDto) {
    try {
      const purchase = await this.prisma.purchase.create({
        data: createPurchaseDto,
      });
  
      await this.prisma.product.update({
        where: {
          id: createPurchaseDto.product_id,
        },
        data: {
          product_quantity: {
            increment: createPurchaseDto.product_quantity,
          }
        },
      });
  
      return purchase;
    } catch (error) {
      // Handle any potential errors here
      throw error;
    }

  }

  findAll() {
    return this.prisma.purchase.findMany();
  }

  findOne(id: number) {
    return this.prisma.purchase.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return this.prisma.purchase.update({
      where: {
        id: id,
      },
      data: updatePurchaseDto,
    });
  }

  remove(id: number) {
    return this.prisma.purchase.delete({
      where: {
        id: id,
      },
    });
  }
}
