import { createUnionType } from '@nestjs/graphql';

import { Coffee } from 'src/coffees/entities';
import { Tea } from 'src/teas/entities';

export const DrinksResultUnion = createUnionType({
  name: 'DrinksResult',
  types: () => [Coffee, Tea],
});
