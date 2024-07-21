import { Controller, Get, Inject } from '@nestjs/common';
import { GetAllProuctsInputPort } from '../../application/use-cases/get-all/getall.products.inputport';
import { ProductDto } from '../../application/dtos/product.dto';
import {
  GET_ALL_PRODUCTS_INPUT,
  GET_ALL_PRODUCTS_OUTPUT,
} from 'src/commons/application/utils/constans';
import { GetAllProuctsOutputPort } from '../../application/use-cases/get-all/getall.products.outputport';

@Controller('product')
export class ProductsController {
  constructor(
    @Inject(GET_ALL_PRODUCTS_INPUT)
    private readonly input: GetAllProuctsInputPort,
    @Inject(GET_ALL_PRODUCTS_OUTPUT)
    private readonly output: GetAllProuctsOutputPort
  ) {}
  @Get()
  async findAll(): Promise<ProductDto[]> {
    const products: ProductDto[] = await this.input.Handle();
    return this.output.Handle(products);
  }
}
