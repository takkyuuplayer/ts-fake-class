import faker from "faker";
import { fakeClass, FakableClass, FakableField } from "../src/index";

@FakableClass()
class User {
  @FakableField(faker.random.number)
  public id?: number;

  @FakableField(faker.internet.email)
  public email?: string;

  public active: boolean = true;
}

const user = fakeClass(User, { email: "takkyuuplayer@example.com" });
console.log(user); // User {active: true, id: 3448, email: 'takkyuuplayer@example.com' }
