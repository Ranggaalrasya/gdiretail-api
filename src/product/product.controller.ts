import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Post()
  createProduct(@Body() product: any) {
    return this.productService.addProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() product: any) {
    return this.productService.updateProduct(parseInt(id), product);
  }
}
