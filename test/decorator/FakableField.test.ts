import { FakableClass } from "../../src/decorator/FakableClass";
import { getMetadataArgsStorage } from "../../src";
import { FakableField } from "../../src/decorator/FakableField";

@FakableClass()
class Klass {
  @FakableField()
  public field: string = "";

  @FakableField(() => "test@example.com")
  public email: string = "";
}

describe("decorator/FakableClass", () => {
  describe("@FakableFields", () => {
    it("add a class into MetadataArgsStorage.classes", () => {
      expect(getMetadataArgsStorage().fields).toEqual(
        expect.arrayContaining([
          { target: Klass, propertyName: "field", faker: undefined }
        ])
      );
    });
    it("accepts function and set to faker", () => {
      const emailFiled = getMetadataArgsStorage().fields.find(
        fieldMetadataArgs => fieldMetadataArgs.propertyName === "email"
      );

      expect(emailFiled!.faker!()).toBe("test@example.com");
    });
  });
});
