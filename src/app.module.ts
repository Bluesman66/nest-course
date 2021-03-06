import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "nest-course",
      models: [],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
