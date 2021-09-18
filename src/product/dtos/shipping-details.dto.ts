import { IsNumber } from 'class-validator';
import { ShippingDetails } from '../interfaces/shipping-details.interface';

export class ShippingDetailsDto implements ShippingDetails {
  @IsNumber()
  weight: number;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  @IsNumber()
  depth: number;
}
