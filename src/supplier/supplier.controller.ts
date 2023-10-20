import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './interfaces/supplier.interface';

@Controller('suppliers')
export class SupplierController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  async findAll(): Promise<Supplier[]> {
    return this.suppliersService.findAll();
  }
}

