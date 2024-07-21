import { ProductDto } from '../../dtos/product.dto';

export interface GetAllProuctsOutputPort {
  Handle(products: ProductDto[]): ProductDto[];
}
