import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = []; // diganti dengan database

  getAllProducts() {
    return this.products;
  }

  addProduct(product: any) {
    this.products.push(product);
    return 'Product added successfully';
  }

  updateProduct(productId: number, updatedProduct: any) {
    this.products = this.products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product,
    );
    return 'Product updated successfully';
  }
}

