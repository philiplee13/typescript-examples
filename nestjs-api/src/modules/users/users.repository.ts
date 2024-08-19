// so what's the difference between repository and service?
// figure out how to extend this and plug and play

import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';

export class UserRepository extends Repository<UsersEntity> {
    // custom methods go here
}
