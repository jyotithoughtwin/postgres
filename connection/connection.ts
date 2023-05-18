 
import { users } from "../entities/users";
import { myusers } from "../entities/myuser";
import { createConnection } from "typeorm";

export const connection = createConnection({
  type: "postgres" ,
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Jyoti@123",
  database: "mydb",
  entities: [users, myusers],
  synchronize: true,
  logging: false
});