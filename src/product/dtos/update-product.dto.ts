import { PartialType } from '@nestjs/mapped-types';
import { IsMongoIdObject } from 'src/common/validators/is-mongo-id-object.validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsMongoIdObject({ message: 'Invalid product id format' })
  id: string;
}
