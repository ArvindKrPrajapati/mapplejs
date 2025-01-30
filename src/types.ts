export interface ServiceMethods<T = any> {
  find?: (req: any, res: any) => Promise<T[]>;
  create?: (data: any, req: any, res: any) => Promise<T>;
  get?: (id: string, req: any, res: any) => Promise<T>;
  patch?: (id: string, data: any, req: any, res: any) => Promise<T>;
  delete?: (id: string, req: any, res: any) => Promise<T>;
  path: string;
}

export interface ServiceClass {
  new (app: any): ServiceMethods;
}

export interface SequelizeServiceMethods<T = any> {
  find?: (req: any, res: any) => Promise<T>;
  create?: (data: any, req: any, res: any) => Promise<T>;
  get?: (id: string, req: any, res: any) => Promise<T>;
  patch?: (id: string, data: any, req: any, res: any) => Promise<T>;
  delete?: (id: string, req: any, res: any) => Promise<T>;
  _find?: (req: any, res: any) => Promise<T>;
  _create?: (data: any, req: any, res: any) => Promise<T>;
  _get?: (id: string, req: any, res: any) => Promise<T>;
  _patch?: (id: string, data: any, req: any, res: any) => Promise<T>;
  _delete?: (id: string, req: any, res: any) => Promise<T>;
  path: string;
}
