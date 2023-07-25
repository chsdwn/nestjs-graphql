import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CoffeeType } from 'src/common/enums';
import { Drink } from 'src/common/interfaces';
import { loggerMiddleware } from 'src/common/middleware';
import { Flavor } from '.';

@Entity()
@ObjectType({ description: 'Coffee model', implements: () => Drink })
export class Coffee implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'A unique identifier' })
  id: number;

  @Field({ middleware: [loggerMiddleware] })
  @Column()
  name: string;

  @Column()
  brand: string;

  // There is no need to decorate since the compilerOptions.plugins option
  // has been added to the nest-cli.json file as ["@nestjs/graphql"].
  // @Field(() => [String])
  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors?: Flavor[];

  @Column({ nullable: true })
  type?: CoffeeType;

  @CreateDateColumn()
  createdAt?: Date;
}
