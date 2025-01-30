import { ServiceClass } from "../types";

export default function serviceInit(app: any, Service: ServiceClass) {
  const service = new Service(app);

  if (service.find) {
    app.get(service.path, async (req: any, res: any) => {
      res.send(await service.find!(req, res));
    });
  }

  if (service.create) {
    app.post(service.path, async (req: any, res: any) => {
      res.send(await service.create!(req.body, req, res));
    });
  }

  if (service.get) {
    app.get(`${service.path}/:id`, async (req: any, res: any) => {
      const { id } = req.params as { id: string };
      res.send(await service.get!(id, req, res));
    });
  }

  if (service.patch) {
    app.patch(`${service.path}/:id`, async (req: any, res: any) => {
      const { id } = req.params as { id: string };
      res.send(await service.patch!(id, req.body, req, res));
    });
  }

  if (service.delete) {
    app.delete(`${service.path}/:id`, async (req: any, res: any) => {
      const { id } = req.params as { id: string };
      res.send(await service.delete!(id, req, res));
    });
  }
}
