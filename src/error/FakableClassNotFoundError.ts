export class FakableClassNotFoundError extends Error {
  name = "FakableClassNotFoundError";

  constructor(fakableClass: Function) {
    super();
    Object.setPrototypeOf(this, FakableClassNotFoundError.prototype);
    const targetName = fakableClass.name;
    this.message = `No fakable class for "${targetName}" was found. Confirm ${targetName} is @FakableClass() decorated.`;
  }
}
