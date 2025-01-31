import { FastifyReply, FastifyRequest } from "fastify";
import { SequelizeServiceMethods, ServiceMethods } from "../types";
import { Application } from "../types/fastify";

export default function serviceInit(app: Application, service: ServiceMethods) {
  const path = service.path.startsWith("/") ? service.path : `/${service.path}`;
  // Add service in app
  app.service[service.path] = service;

  if (service.find) {
    app.get(path, async (req: FastifyRequest, res: FastifyReply) => {
      res.send(await service.find!(req, res));
    });
  }

  if (service.create) {
    app.post(path, async (req: FastifyRequest, res: FastifyReply) => {
      res.send(await service.create!(req.body, req, res));
    });
  }

  if (service.get) {
    app.get(`${path}/:id`, async (req: FastifyRequest, res: FastifyReply) => {
      const { id } = req.params as { id: string };
      res.send(await service.get!(id, req, res));
    });
  }

  if (service.patch) {
    app.patch(`${path}/:id`, async (req: FastifyRequest, res: FastifyReply) => {
      const { id } = req.params as { id: string };
      res.send(await service.patch!(id, req.body, req, res));
    });
  }

  if (service.delete) {
    app.delete(
      `${path}/:id`,
      async (req: FastifyRequest, res: FastifyReply) => {
        const { id } = req.params as { id: string };
        res.send(await service.delete!(id, req, res));
      }
    );
  }
}
