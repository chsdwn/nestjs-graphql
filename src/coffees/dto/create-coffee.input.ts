import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

import { CoffeeType } from 'src/common/enums';

@InputType({ description: 'Create coffee input object type.' })
export class CreateCoffeeInput {
  @MinLength(3)
  @Field(() => String, { description: 'A new cofee name' })
  name: string;
  brand: string;
  flavors: string[];
  type: CoffeeType;
}
