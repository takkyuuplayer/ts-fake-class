import { FakableClass } from "../../src/decorator/FakableClass";
import { getMetadataArgsStorage } from "../../src";
import { FakableField } from "../../src/decorator/FakableField";

@FakableClass()
class Klass {
  @FakableField()
  public field: string = "";
}

describe("decorator/FakableClass", () => {
  describe("@FakableFields", () => {
    it("add a class into MetadataArgsStorage.classes", () => {
      expect(getMetadataArgsStorage().fields).toStrictEqual([
        { target: Klass, propertyName: "field" }
      ]);
    });
  });
});
