import { getMetadataArgsStorage } from "../";

export function FakableField(
  resolver: (instance: any) => any,
  { order } = { order: Number.MAX_VALUE }
): Function {
  return function (object: Object, propertyName: string) {
    getMetadataArgsStorage().fields.push({
      target: object.constructor,
      propertyName,
      resolver,
      order,
    });
  };
}
