import { getMetadataArgsStorage, fake } from "../src";
import { MetadataArgsStorage } from "../src/metada-args/MetadataArgsStorage";
import { FakableClass } from "../src/decorator/FakableClass";
import { FakableField } from "../src/decorator/FakableField";
import { FakableClassNotFoundError } from "../src/error/FakableClassNotFoundError";

describe("index", () => {
  describe("getMetadataArgsStorage()", () => {
    it("returns MetadataArgsStorage", () => {
      expect(getMetadataArgsStorage()).toBeInstanceOf(MetadataArgsStorage);
    });
  });
  describe("fake()", () => {
    @FakableClass()
    class Klass {
      @FakableField(() => "test@example.com")
      public email: string = "";

      public nonFakable: string = "I am not fakable";
    }

    const faked = fake(Klass);
    it("creates fake class", () => {
      expect(faked).toBeInstanceOf(Klass);
    });
    it("sets properties by calling faker function", () => {
      expect(faked.email).toBe("test@example.com");
    });
    it("returns default value when the property is not fakable.", () => {
      expect(faked.nonFakable).toBe("I am not fakable");
    });
    it("throws error when passing non FakableClass", () => {
      expect(() => fake(class {})).toThrowError(FakableClassNotFoundError);
    });

    it("uses properties", () => {
      const faked = fake(Klass, { email: "new@example.com" });
      expect(faked.email).toBe("new@example.com");
    });
  });
});
