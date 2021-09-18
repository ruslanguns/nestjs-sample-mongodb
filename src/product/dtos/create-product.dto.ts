import { Type } from 'class-transformer';
import {
  IsDefined,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ManufactureDetailsDto } from './manufacture-details.dto';
import { ShippingDetailsDto } from './shipping-details.dto';

export class CreateProductDto {
  @IsString()
  item: string;

  @IsString()
  description: number;

  @Type(() => Number)
  @IsInt()
  price: number;

  @Type(() => Number)
  @IsInt()
  quantity: number;

  @IsString({ each: true })
  categories: string[];

  @IsString({ each: true })
  colors: string[];

  @IsOptional({ each: true })
  @IsString({ each: true })
  images?: string[];

  @ValidateNested()
  @Type(() => ShippingDetailsDto)
  @IsDefined()
  shippingDetails: ShippingDetailsDto;

  @ValidateNested()
  @Type(() => ManufactureDetailsDto)
  @IsDefined()
  manufactureDetails: ManufactureDetailsDto;
}
