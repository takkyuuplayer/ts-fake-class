import { MetadataArgsStorage } from "./metada-args/MetadataArgsStorage";
import { PlatformTools } from "./platform/platformTools";
import { FakableClassNotFoundError } from "./error/FakableClassNotFoundError";

export function getMetadataArgsStorage(): MetadataArgsStorage {
  const globalScope = PlatformTools.getGlobalVariable();
  if (!globalScope.fakeDecoratorMetadataArgsStorage) {
    globalScope.fakeDecoratorMetadataArgsStorage = new MetadataArgsStorage();
  }

  return globalScope.fakeDecoratorMetadataArgsStorage;
}

export function fake<T extends new (...args: any[]) => any>(
  FakableClass: T,
  properties?: any
): any {
  const classMetadata = getMetadataArgsStorage().classes.find(
    classMetadataArgs => classMetadataArgs.target === FakableClass
  );
  if (!classMetadata) {
    throw new FakableClassNotFoundError(FakableClass);
  }

  const faked = new FakableClass();
  Object.getOwnPropertyNames(faked).forEach(propertyName => {
    // TODO: Is there better way?
    // eslint-disable-next-line no-prototype-builtins
    if (properties?.hasOwnProperty(propertyName)) {
      faked[propertyName] = properties[propertyName];
      return;
    }

    // TODO: Make it O(1) with hashmap
    const fieldMetadata = getMetadataArgsStorage().fields.find(fm => {
      return fm.target === FakableClass && fm.propertyName === propertyName;
    });

    if (fieldMetadata) {
      faked[propertyName] = fieldMetadata.faker();
    }
  });

  return faked;
}
