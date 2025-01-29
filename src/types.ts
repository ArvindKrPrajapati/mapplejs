export interface ServiceMethods<T = any> {
  find?: (req: any, res: any) => Promise<T[]>;
  create?: (data: any, req: any, res: any) => Promise<T>;
  get?: (id: string, req: any, res: any) => Promise<T>;
  patch?: (id: string, data: any, req: any, res: any) => Promise<T>;
  delete?: (id: string, req: any, res: any) => Promise<T>;
  path: string;
}

export interface ServiceClass {
  new (): ServiceMethods;
}
