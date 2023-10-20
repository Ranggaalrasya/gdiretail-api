import { Injectable } from '@nestjs/common';
import { Supplier } from './interfaces/supplier.interface';
import { CreateSupplierDto } from './dto/create-supplier.dto';

@Injectable()
export class SuppliersService {
  private readonly suppliers: Supplier[] = [];

  create(createSupplierDto: CreateSupplierDto): Supplier {
    const supplier: Supplier = {
      id: this.suppliers.length + 1,
      ...createSupplierDto,
    };
    this.suppliers.push(supplier);
    return supplier;
  }

  findAll(): Supplier[] {
    return this.suppliers;
  }
}
