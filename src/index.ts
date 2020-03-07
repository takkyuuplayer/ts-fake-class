import { MetadataArgsStorage } from "./metada-args/MetadataArgsStorage";
import { PlatformTools } from "./platform/platformTools";

export function getMetadataArgsStorage(): MetadataArgsStorage {
  const globalScope = PlatformTools.getGlobalVariable();
  if (!globalScope.fakeDecoratorMetadataArgsStorage) {
    globalScope.fakeDecoratorMetadataArgsStorage = new MetadataArgsStorage();
  }

  return globalScope.fakeDecoratorMetadataArgsStorage;
}
