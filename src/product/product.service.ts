import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async find() {
    return await this.productModel.find();
  }

  async findOne(id: string) {
    return await this.productModel.findOne({ _id: id });
  }

  async create(dto: CreateProductDto) {
    return await this.productModel.create(dto);
  }

  // update() {}
  // remove() {}
}
