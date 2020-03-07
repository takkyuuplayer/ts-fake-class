import { getMetadataArgsStorage } from "../src";
import { MetadataArgsStorage } from "../src/metada-args/MetadataArgsStorage";

describe("index", () => {
  describe("getMetadataArgsStorage()", () => {
    it("returns MetadataArgsStorage", () => {
      expect(getMetadataArgsStorage()).toBeInstanceOf(MetadataArgsStorage);
    });
  });
});
