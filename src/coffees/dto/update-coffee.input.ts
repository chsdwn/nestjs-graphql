import { InputType, PartialType } from '@nestjs/graphql';

import { CreateCoffeeInput } from '.';

@InputType()
export class UpdateCoffeeInput extends PartialType(CreateCoffeeInput) {}
