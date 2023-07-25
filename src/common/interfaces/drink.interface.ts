import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Drink {
  // The "@nestjs/graphql" plugin does not work with files
  // having the ".interface" extension.
  @Field()
  name: string;
}
