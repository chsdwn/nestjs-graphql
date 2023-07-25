import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { FlavorsByCoffeeLoader } from './data-loader';
import { Coffee, Flavor } from './entities';

@Resolver(() => Coffee)
export class CoffeeFlavorsResolver {
  constructor(private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader) {}

  @ResolveField('flavors', () => [Flavor])
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    // N + 1 problem fix
    return this.flavorsByCoffeeLoader.load(coffee.id);
  }
}
