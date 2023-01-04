import { User } from "../../models/User";

type UserWithoutNullableKeys<Type = User> = {
  [Key in keyof Type]-?: UserWithoutNullableKeys<NonNullable<Type[Key]>>;
};

export const buildUserTest = (props?: Partial<User>) => {
  return {
    id: "user-id-test",
    email: "user@email.test",
    name: "John Doe",
    password: "test123",
    phone: "99 999999999",
    ...props
  } as UserWithoutNullableKeys
 }