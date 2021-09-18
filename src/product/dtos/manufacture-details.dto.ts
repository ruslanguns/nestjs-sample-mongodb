import { IsString } from 'class-validator';
import { ManufactureDetails } from '../interfaces/manufacture-details.interface';

export class ManufactureDetailsDto implements ManufactureDetails {
  @IsString()
  mode: string;

  @IsString()
  brand: string;
}
