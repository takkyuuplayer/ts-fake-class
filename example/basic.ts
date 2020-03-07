import { fakeClass, FakableClass, FakableField } from "../src/index";

@FakableClass()
class User {
  public id?: number;

  @FakableField(() => "takkyuuplayer@example.com")
  public email?: string;

  public active: boolean = true;
}

const user = fakeClass(User);
console.log(user); // User {active: true, email: 'takkyuuplayer@example.com' }
