import { Entity } from './entity';

export interface NewUser extends Entity {
  name: string;
  surname: string;
  email: string;
  password: string;
}
