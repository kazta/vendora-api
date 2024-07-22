import { Product } from '../../domain/entities/product.entities';

export class ProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;

  static fromEntity(product: Product): ProductDto {
    let dto = new ProductDto();
    dto.id = product.id;
    dto.description = product.description;
    dto.name = product.name;
    dto.price = product.price;
    dto.stock = product.stock;
    return dto;
  }
}
