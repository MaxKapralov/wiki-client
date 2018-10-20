import { Entity } from './entity';
import { User } from './user';
import { Resource } from './resource';

export interface Page extends Entity {
  content: string;
  title: string;
  author: Resource<User>;
  allowedToRead: User[];
  timestamp: Date;
}
