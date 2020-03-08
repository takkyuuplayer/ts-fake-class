import { MetadataArgsStorage } from "./metada-args/MetadataArgsStorage";
import { PlatformTools } from "./platform/platformTools";
import { FakableClassNotFoundError } from "./error/FakableClassNotFoundError";
export * from "./decorator/FakableClass";
export * from "./decorator/FakableField";

export function getMetadataArgsStorage(): MetadataArgsStorage {
  const globalScope = PlatformTools.getGlobalVariable();
  if (!globalScope.fakeDecoratorMetadataArgsStorage) {
    globalScope.fakeDecoratorMetadataArgsStorage = new MetadataArgsStorage();
  }

  return globalScope.fakeDecoratorMetadataArgsStorage;
}

export function fakeClass<T extends new (...args: any[]) => any>(
  FakableClass: T,
  properties?: any,
  count = 1
): any {
  const classMetadata = getMetadataArgsStorage().classes.find(
    classMetadataArgs => classMetadataArgs.target === FakableClass
  );
  if (!classMetadata) {
    throw new FakableClassNotFoundError(FakableClass);
  }

  const fakedFields = getMetadataArgsStorage()
    .fields.filter(fm => {
      return fm.target === FakableClass;
    })
    .sort((a, b) => (a.order < b.order ? -1 : a.order === b.order ? 0 : 1));

  let fakedClasses: Array<T> = [];
  for (let index = 0; index < count; index++) {
    const faked = new FakableClass();

    fakedFields.forEach(fieldMetadataArgs => {
      if (properties?.hasOwnProperty(fieldMetadataArgs.propertyName)) {
        faked[fieldMetadataArgs.propertyName] =
          properties[fieldMetadataArgs.propertyName];
        return;
      }

      faked[fieldMetadataArgs.propertyName] = fieldMetadataArgs.resolver(faked);
    });

    fakedClasses.push(faked);
  }

  return count === 1 ? fakedClasses[0] : fakedClasses;
}
