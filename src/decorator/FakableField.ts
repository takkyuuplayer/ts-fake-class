import { getMetadataArgsStorage } from "../";

export function FakableField(resolver: () => any): Function {
  return function(object: Object, propertyName: string) {
    getMetadataArgsStorage().fields.push({
      target: object.constructor,
      propertyName,
      resolver
    });
  };
}
