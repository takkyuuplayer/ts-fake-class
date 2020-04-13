import { fakeClass, FakableClass, FakableField } from "../src/index";

@FakableClass()
class User {
  @FakableField(() => 5, {
    order: 0,
  })
  public id?: number;

  @FakableField((user: User) => `test-${user.id}@example.com`, { order: 1 })
  public email?: string;
}

const user = fakeClass(User);
console.log(user); // User {id: 5, email: 'test-5@example.com' }
