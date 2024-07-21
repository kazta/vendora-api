import { ProductDto } from '../../dtos/product.dto';

export interface GetAllProuctsInputPort {
  Handle(): Promise<ProductDto[]>;
}
