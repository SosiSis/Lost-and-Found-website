import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
  timestamps:true
})
export class comments{

  @Prop()
  comment:string;


  
}

export const CommentsSchema = SchemaFactory.createForClass(comments)
