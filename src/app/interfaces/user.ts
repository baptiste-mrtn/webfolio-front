import { BaseEntity } from "./base-entity";

export interface User extends BaseEntity{
  data?: any;
  firstName: string;
  lastName: string;
  email:string;
  roles:[];
  password: string;
  commments?:any;
}
