import { Injectable } from '@nestjs/common';
import { ProductDto } from '../../application/dtos/product.dto';
import { GetAllProuctsOutputPort } from '../../application/use-cases/get-all/getall.products.outputport';
import { NoContentException } from 'src/commons/application/exceptions/nocontent.exception';

@Injectable()
export class GetAllProductsPresenter implements GetAllProuctsOutputPort {
  Handle(products: ProductDto[]): ProductDto[] {
    if (!products || products.length == 0) {
      throw new NoContentException();
    }
    return products;
  }
}
