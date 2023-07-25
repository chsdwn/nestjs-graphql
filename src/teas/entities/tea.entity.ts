import { ObjectType } from '@nestjs/graphql';

import { Drink } from 'src/common/interfaces';

@ObjectType({ implements: () => Drink })
export class Tea implements Drink {
  name: string;
}
