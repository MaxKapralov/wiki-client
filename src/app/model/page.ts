import { Entity } from './entity';
import { User } from './user';

export interface Page extends Entity {
  content: string;
  title: string;
  author: User;
  allowedToRead: User[];
  timestamp: Date;
}
