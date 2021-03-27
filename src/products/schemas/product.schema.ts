import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  productName: string;

  @Prop()
  productQty: number;

  @Prop()
  productPrice: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);