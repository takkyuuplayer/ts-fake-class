import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { fakeClass } from "../../src";

createConnection({
  type: "sqlite",
  database: ":memory:",
  entities: [User],
  synchronize: true,
})
  .then(async (connection) => {
    const user = fakeClass(User, undefined, 3);
    const repository = connection.getRepository(User);

    await repository.save(user);

    const users = await repository.find();

    console.log(users);
  })
  .catch((error) => console.log(error));
