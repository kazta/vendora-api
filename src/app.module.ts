import { Module } from '@nestjs/common';
import { CommonsModule } from './commons/commons.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [CommonsModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
