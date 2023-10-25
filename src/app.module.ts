import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';



@Module({
  imports: [PurchaseModule, SaleModule, ProductModule, SupplierModule , UserModule , AuthModule],
  controllers: [AppController],
  providers: [AppService , PrismaService],
})
export class AppModule {}
