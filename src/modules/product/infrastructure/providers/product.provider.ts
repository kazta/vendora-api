import { DataSource } from 'typeorm';
import { Product } from '../../domain/entities/product.entities';
import {
  DATA_SOURCE_PROVIDER,
  GET_ALL_PRODUCTS_INPUT,
  GET_ALL_PRODUCTS_OUTPUT,
  PRODUCT_REPPOSITORY,
} from 'src/commons/application/utils/constans';
import { GetAllProuctsInteractor } from '../../application/use-cases/get-all/getall.products.interactor';
import { Provider } from '@nestjs/common';
import { GetAllProductsPresenter } from '../presenters/getall.products.presenter';

export const productProviders: Provider[] = [
  {
    provide: PRODUCT_REPPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: [DATA_SOURCE_PROVIDER],
  },
  {
    provide: GET_ALL_PRODUCTS_INPUT,
    useClass: GetAllProuctsInteractor,
  },
  {
    provide: GET_ALL_PRODUCTS_OUTPUT,
    useClass: GetAllProductsPresenter,
  },
];
