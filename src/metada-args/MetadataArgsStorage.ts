interface IClassMetadataArgs {
  target: Function | string;
}
interface IFieldMetadataArgs {
  readonly target: Function | string;
  readonly propertyName: string;
  readonly resolver: Function;
  readonly order: number;
}
export class MetadataArgsStorage {
  readonly classes: IClassMetadataArgs[] = [];
  readonly fields: IFieldMetadataArgs[] = [];
}
