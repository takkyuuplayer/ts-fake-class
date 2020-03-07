import { MetadataArgsStorage } from "../../src/metada-args/MetadataArgsStorage";

describe("metadata-args/MetadataArgsStorage", () => {
  describe("MetadataArgsStorage class", () => {
    const metadataArgsStorage = new MetadataArgsStorage();
    it("has array to store class metadata args", () => {
      expect(metadataArgsStorage).toHaveProperty("classes");
      expect(metadataArgsStorage.classes).toStrictEqual([]);
    });
    it("has array to store field metadata args", () => {
      expect(metadataArgsStorage).toHaveProperty("fields");
      expect(metadataArgsStorage.fields).toStrictEqual([]);
    });
  });
});
