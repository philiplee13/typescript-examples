// so this is suppose to be the object that maps the column to an object
// what's the diff between this and the model?
// seems like entities are what happens rows in the db to objects
// and then models are what's used for behaviors and methods that act on the objects

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "users", name: "user" })
export class UsersEntity {
    @PrimaryGeneratedColumn()
    user_id: string;

    @Column()
    name: string;

    @Column()
    age: number;
}
