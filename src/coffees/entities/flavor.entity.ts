import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import * as GraphQLTypes from 'src/graphql-types';
import { Coffee } from '.';

@Entity()
export class Flavor extends GraphQLTypes.Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
