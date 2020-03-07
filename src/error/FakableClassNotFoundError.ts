export class FakableClassNotFoundError extends Error {
  name = "FakableClassNotFoundError";

  constructor(fakableClass: Function | string) {
    super();
    Object.setPrototypeOf(this, FakableClassNotFoundError.prototype);
    let targetName: string;
    if (typeof fakableClass === "function") {
      targetName = fakableClass.name;
    } else {
      targetName = fakableClass;
    }
    this.message = `No fakable class for "${targetName}" was found. Confirm ${targetName} is @FakableClass() decorated.`;
  }
}
