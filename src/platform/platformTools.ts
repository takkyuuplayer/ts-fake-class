export const PlatformTools = class {
  static getGlobalVariable(): any {
    if (typeof window !== "undefined") {
      return window;
    } else {
      return global;
    }
  }
};
