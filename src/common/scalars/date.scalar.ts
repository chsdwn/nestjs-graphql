import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description?: string;

  // run on mutations
  parseValue(value: number): Date {
    return new Date(value);
  }

  serialize(value: Date): number {
    console.log('[DateScalar:serialize]:', value);
    return value.getTime();
  }

  // run on queries
  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
