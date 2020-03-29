import { getMetadataArgsStorage } from "../";
export function FakableClass(): Function {
  return function (target: new (...args: any[]) => any) {
    getMetadataArgsStorage().classes.push({
      target,
    });
  };
}
