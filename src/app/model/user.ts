import { Entity } from './entity';

export interface User extends Entity {
  fullName: string;
  username: string;
}
