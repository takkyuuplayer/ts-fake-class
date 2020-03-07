# fake-class

![](https://github.com/takkyuuplayer/ts-fake-class/workflows/CI/badge.svg)
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

See more [examples](https://github.com/takkyuuplayer/ts-faker-decoration/tree/master/example)

## 