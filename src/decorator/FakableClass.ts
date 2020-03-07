import { getMetadataArgsStorage } from "../";
export function FakableClass(): Function {
  return function(target: Function) {
    getMetadataArgsStorage().classes.push({
      target
    });
  };
}
