import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [ProductsController],
  imports: [ProductsModule]
})
export class ProductsModule {}
