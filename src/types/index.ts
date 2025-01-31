import { FastifyReply, FastifyRequest } from "fastify";

export interface ServiceMethods<T = any> {
  find?: (req: FastifyRequest, res: FastifyReply) => Promise<T[]>;
  create?: (data: any, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  get?: (id: string, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  patch?: (
    id: string,
    data: any,
    req: FastifyRequest,
    res: FastifyReply
  ) => Promise<T>;
  delete?: (id: string, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  path: string;
}

export interface SequelizeServiceMethods<T = any> {
  find?: (req: FastifyRequest, res: FastifyReply) => Promise<T>;
  create?: (data: any, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  get?: (id: string, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  patch?: (
    id: string,
    data: any,
    req: FastifyRequest,
    res: FastifyReply
  ) => Promise<T>;
  delete?: (id: string, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  _find?: (req: FastifyRequest, res: FastifyReply) => Promise<T>;
  _create?: (data: any, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  _get?: (id: string, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  _patch?: (
    id: string,
    data: any,
    req: FastifyRequest,
    res: FastifyReply
  ) => Promise<T>;
  _delete?: (id: string, req: FastifyRequest, res: FastifyReply) => Promise<T>;
  path: string;
}
