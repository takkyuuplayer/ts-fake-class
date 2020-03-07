interface IClassMetadataArgs {
  target: Function | string;
}
interface IFieldMetadataArgs {
  readonly target: Function | string;
  readonly propertyName: string;
  readonly faker: Function;
}
export class MetadataArgsStorage {
  readonly classes: IClassMetadataArgs[] = [];
  readonly fields: IFieldMetadataArgs[] = [];
}
