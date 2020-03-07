import { PlatformTools } from "../../src/platform/platformTools";

describe("platform/platformTools", () => {
  describe("platformTools", () => {
    describe("getGlobalVariable", () => {
      it("returns global", () => {
        expect(PlatformTools.getGlobalVariable()).toBe(global);
      });
    });
  });
});
