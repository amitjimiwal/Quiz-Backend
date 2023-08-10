import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeConfigDatabase: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgresql",
  database: "quiz",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true
};

export default typeConfigDatabase;
