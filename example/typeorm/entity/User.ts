import "reflect-metadata";
import { FakableClass, FakableField } from "../../../src/index";
import { Entity, PrimaryColumn, Generated, Column } from "typeorm";

@FakableClass()
@Entity()
export class User {
  @PrimaryColumn("integer")
  @Generated()
  public id?: number;

  @FakableField(
    () => `takkyuuplayer${Math.ceil(Math.random() * 1000)}@example.com`
  )
  @Column()
  public email?: string;

  @Column()
  public active: boolean = true;
}
