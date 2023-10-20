import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [PurchaseModule, SaleModule, ProductModule, SupplierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
