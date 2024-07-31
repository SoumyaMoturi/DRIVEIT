import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  googleId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name!: string;
}
