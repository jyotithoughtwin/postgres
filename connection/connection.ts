 
import { users } from "../entities/users";
import { createConnection } from "typeorm";

export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "demo",
  entities: [users],
  synchronize: true,
  logging: false
});