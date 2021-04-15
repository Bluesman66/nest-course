import { AppService } from "./app.service";
import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  constructor(private service: AppService) {}

  @Get("/users")
  getUsers() {
    return this.service.getUsers();
  }
}
