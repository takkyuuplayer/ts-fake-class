# fake-class

![CI](https://github.com/takkyuuplayer/ts-fake-class/workflows/CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/takkyuuplayer/ts-fake-class/badge.svg?branch=master)](https://coveralls.io/github/takkyuuplayer/ts-fake-class?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

fake-class instantiates objects with fake data.

## Requirement

* TypeScript version **3.3** or higher
* You have enabled the following settings in `tsconfig.json`:

   ```json
   "emitDecoratorMetadata": true,
   "experimentalDecorators": true,
   ```

## Install

1. Install the npm package:

    `npm install fake-class --save`

## Usage

### Basic Usage

```node
import { fakeClass, FakableClass, FakableField } from "fake-class";

@FakableClass()
class User {
  public id?: number;

  @FakableField(() => "takkyuuplayer@example.com")
  public email?: string;

  public active: boolean = true;
}

const user = fakeClass(User);
console.log(user); // User {active: true, email: 'takkyuuplayer@example.com' }
```

### Field Relation

You can set orders for fields to be resolved earlier than the others.
The default order is `Number.MAX_VALUE`.

Useful to relate faked fields.

```node
@FakableClass()
class User {
  @FakableField(() => 5, {
    order: 0
  })
  public id?: number;

  @FakableField((user: User) => `test-${user.id}@example.com`)
  public email?: string;
}

const user = fakeClass(User);
console.log(user); // User {id: 5, email: 'test-5@example.com' }
```

### More Examples

See more [examples](https://github.com/takkyuuplayer/ts-faker-decoration/tree/master/example).
