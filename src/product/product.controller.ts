import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async find() {
    return await this.productService.find();
  }

  @Post()
  async create(@Body() dto: CreateProductDto) {
    return await this.productService.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productService.findOne(id);
  }

  @Put()
  async updateOne(@Body() dto: UpdateProductDto) {
    return await this.productService.update(dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.productService.remove(id);
  }
}
