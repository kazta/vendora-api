import { Module } from '@nestjs/common';
import { ProductsController } from './infrastructure/controllers/product.controller';
import { productProviders } from './infrastructure/providers/product.provider';
import { CommonsModule } from 'src/commons/commons.module';

@Module({
  imports: [CommonsModule],
  controllers: [ProductsController],
  providers: [...productProviders],
})
export class ProductModule {}
