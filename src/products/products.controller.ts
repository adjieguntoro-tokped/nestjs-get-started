import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Body() updateProductDto: CreateProductDto, @Param('id') id): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  destroy(@Param('id') id): Promise<Product> {
    return this.productsService.delete(id);
  }
}
