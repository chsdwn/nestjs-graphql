import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as DataLoader from 'dataloader';
import { In, Repository } from 'typeorm';

import { Coffee, Flavor } from '../entities';

@Injectable({ scope: Scope.REQUEST })
export class FlavorsByCoffeeLoader extends DataLoader<number, Flavor[]> {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {
    super((keys) => this.batchLoadFn(keys));
  }

  private async batchLoadFn(coffeeIds: readonly number[]): Promise<Flavor[][]> {
    const coffeeswithFlavors = await this.coffeesRepository.find({
      select: ['id'],
      relations: { flavors: true },
      where: { id: In(coffeeIds as number[]) },
    });
    return coffeeswithFlavors.map((coffee) => coffee.flavors);
  }
}
