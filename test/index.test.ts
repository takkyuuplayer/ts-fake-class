import { getMetadataArgsStorage, fakeClass } from "../src";
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
  describe("fakeClass()", () => {
    @FakableClass()
    class Klass {
      @FakableField(() => "test@example.com")
      public email?: string;

      public nonFakable: string = "I am not fakable";
    }

    const faked = fakeClass(Klass);
    it("creates fake class", () => {
      expect(faked).toBeInstanceOf(Klass);
    });
    it("sets properties by calling resolver function", () => {
      expect(faked.email).toBe("test@example.com");
    });
    it("returns default value when the property is not fakable.", () => {
      expect(faked.nonFakable).toBe("I am not fakable");
    });
    it("throws error when passing non FakableClass", () => {
      expect(() => fakeClass(class {})).toThrowError(FakableClassNotFoundError);
    });

    it("sets properties from 2nd argument", () => {
      const faked = fakeClass(Klass, { email: "new@example.com" });
      expect(faked.email).toBe("new@example.com");
    });
    it("returns multiple fake instances", () => {
      const fakedClasses = fakeClass(Klass, undefined, 3);

      expect(fakedClasses.length!).toBe(3);
      expect(fakedClasses[0]).toBeInstanceOf(Klass);
    });
  });
});
