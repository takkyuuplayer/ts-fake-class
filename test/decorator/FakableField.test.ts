import { FakableClass } from "../../src/decorator/FakableClass";
import { getMetadataArgsStorage } from "../../src";
import { FakableField } from "../../src/decorator/FakableField";

@FakableClass()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Klass {
  @FakableField(() => "test@example.com")
  public email: string = "";
}

describe("decorator/FakableClass", () => {
  describe("@FakableFields", () => {
    it("accepts function and set to faker", () => {
      const emailFiled = getMetadataArgsStorage().fields.find(
        fieldMetadataArgs => fieldMetadataArgs.propertyName === "email"
      );

      expect(emailFiled!.resolver!()).toBe("test@example.com");
    });
  });
});
