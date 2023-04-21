import { BaseEntity } from "./base-entity";

export interface User extends BaseEntity{
  firstName: string;
  lastName: string;
  email:string;
  roles:[];
  password: string;
  commments?:any;
}
