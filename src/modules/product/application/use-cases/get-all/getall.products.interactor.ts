import { Inject, Injectable } from '@nestjs/common';
import { GetAllProuctsInputPort } from './getall.products.inputport';
import { ProductDto } from '../../dtos/product.dto';
import { Repository } from 'typeorm';
import { Product } from 'src/modules/product/domain/entities/product.entities';
import { PRODUCT_REPPOSITORY } from 'src/commons/application/utils/constans';

@Injectable()
export class GetAllProuctsInteractor implements GetAllProuctsInputPort {
  constructor(
    @Inject(PRODUCT_REPPOSITORY) private repository: Repository<Product>
  ) {}
  Handle(): Promise<ProductDto[]> {
    const products = this.repository.find();
    return products;
  }
}
