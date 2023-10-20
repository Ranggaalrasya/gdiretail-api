import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
<<<<<<< src/app.module.ts
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PurchaseModule, SaleModule, UserModule, AuthModule],
=======
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [PurchaseModule, SaleModule, ProductModule, SupplierModule , UserModule , AuthModule],
>>>>>>> src/app.module.ts
  controllers: [AppController],
  providers: [AppService , PrismaService],
})
export class AppModule {}
