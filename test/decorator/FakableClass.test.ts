import { FakableClass } from "../../src/decorator/FakableClass";
import { getMetadataArgsStorage } from "../../src";

@FakableClass()
class Klass {}

describe("decorator/FakableClass", () => {
  describe("@FakableClass", () => {
    it("add a class into MetadataArgsStorage.classes", () => {
      expect(getMetadataArgsStorage().classes).toStrictEqual([
        { target: Klass }
      ]);
    });
  });
});
