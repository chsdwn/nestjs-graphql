# NestJS GraphQL

## Queries

### metadata

```gql
{
  __type(name: "CoffeeType") {
    enumValues {
      name
    }
  }
}
```

### drinks

#### findAll

```gql
{
  drinks {
    ... on Tea {
      name
    }
    ... on Coffee {
      name
      brand
    }
  }
}
```

### coffees

#### findAll

```gql
{
  coffees {
    id
    name
    brand
    flavors {
      id
      name
    }
    type
    createdAt
  }
}
```

#### findOne

```gql
query($coffeeId: ID!) {
  coffee(id: $coffeeId) {
    id
    name
    brand
    flavors {
      id
      name
    }
  }
}
```

##### Variables
```json
{
  "coffeeId": 1
}
```

#### create

```gql
mutation {
  createCoffee(createCoffeeInput: {
    name: "Lorem",
    brand: "Buddybrew",
    flavors: ["chocolate"],
    type: ARABICA
  }) {
    id
    name
    brand
    flavors {
      id
      name
    }
    type
  }
}
```

#### update

```gql
mutation {
  updateCoffee(id: 1, updateCoffeeInput: {
    brand: "Ipsum",
  }) {
    id
  }
}
```

#### remove

```gql
mutation {
  removeCoffee(id: 1) {
    name
  }
}
```

#### coffeeAdded

```gql
subscription {
  coffeeAdded {
    id
    name
    brand
  }
}
```
