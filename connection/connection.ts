 
import { users } from "../entities/users";
import { createConnection } from "typeorm";

export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "demo",
  password: "demo",
  database: "demo",
  entities: [users],
  synchronize: true,
  logging: false
});