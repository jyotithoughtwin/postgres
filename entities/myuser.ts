import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class myusers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    myname: string;

    @Column()
    myemail: string;
}