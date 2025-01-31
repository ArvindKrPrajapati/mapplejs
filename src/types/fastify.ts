import "fastify";
import { FastifyInstance } from "fastify";
import { Sequelize } from "sequelize";

declare module "fastify" {
  interface FastifyInstance {
    sequelizeClient: Sequelize;
    service: any;
  }
}

export interface Application extends FastifyInstance {}
