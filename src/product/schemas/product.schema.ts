import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ManufactureDetails } from '../interfaces/manufacture-details.interface';
import { ShippingDetails } from '../interfaces/shipping-details.interface';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  // @Prop({ type: String, default: this._id})
  // id?: string;

  @Prop({ type: String, required: true })
  item: string;

  @Prop({ type: String, required: true })
  description: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({
    type: () => [String],
    required: true,
    validate: {
      validator: (value) => {
        return value.every((item) => typeof item === 'string');
      },
      message: (props) => `${props.value} must be an string!`,
    },
  })
  categories: string[];

  @Prop({
    type: () => [String],
    required: false,
    validate: {
      validator: (value) => {
        return value.every((item) => typeof item === 'string');
      },
      message: (props) => `${props.value} must be an string!`,
    },
  })
  colors: string[];

  @Prop({
    type: () => [String],
    required: false,
    validate: {
      validator: (value) => {
        return value.every((item) => typeof item === 'string');
      },
      message: (props) => `${props.value} must be an string!`,
    },
  })
  images?: string[];

  @Prop(
    raw({
      weight: { type: Number },
      width: { type: Number },
      height: { type: Number },
      depth: { type: Number },
    }),
  )
  shippingDetails?: ShippingDetails;

  @Prop(
    raw({
      model: { type: String },
      brand: { type: String },
    }),
  )
  manufactureDetails: ManufactureDetails;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
