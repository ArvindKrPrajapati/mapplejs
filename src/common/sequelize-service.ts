import { SequelizeServiceMethods } from "../types";

export default class SequelizeService implements SequelizeServiceMethods {
  private model: any;
  path: string = "";

  constructor(model: any) {
    this.model = model;
  }

  async _find(request: any, response: any) {
    try {
      const query = request.query as any;
      const limit = Number(query["$limit"]) || 20;
      const skip = Number(query["$skip"]) || 0;
      const sort = query["$sort"] || {};

      const order: any[] = [];
      for (const [field, value] of Object.entries(sort)) {
        order.push([field, Number(value) === 1 ? "ASC" : "DESC"]);
      }

      const where: any = {};
      for (const [key, value] of Object.entries(query)) {
        if (!key.startsWith("$")) {
          where[key] = value;
        }
      }

      const data = await this.model.findAll({
        where,
        limit: limit,
        offset: skip,
        order: order,
      });
      const total = await this.model.count({ where });
      return {
        total,
        limit,
        skip,
        data,
      };
    } catch (error: any) {
      throw new Error(`Failed to find items: ${error.message}`);
    }
  }
  async _get(id: string, request: any) {
    try {
      const item = await this.model.findByPk(id);
      if (!item) {
        throw new Error("Item not found");
      }
      return item;
    } catch (error: any) {
      throw new Error(`Failed to get item: ${error.message}`);
    }
  }
  async _create(data: any, request: any) {
    try {
      await this.model.create(data);
      return {
        message: "Created successfully",
      };
    } catch (error: any) {
      throw new Error(`Failed to create item: ${error.message}`);
    }
  }
  async _patch(id: string, data: any, request: any) {
    try {
      const item = await this.model.findByPk(id);
      if (!item) {
        throw new Error("Item not found");
      }
      await item.update(data);
      return {
        message: "Updated successfully",
      };
    } catch (error: any) {
      throw new Error(`Failed to update item: ${error.message}`);
    }
  }
  async _delete(id: string, request: any) {
    try {
      const item = await this.model.findByPk(id);
      if (!item) {
        throw new Error("Item not found");
      }
      await item.destroy();
      return {
        message: "Deleted successfully",
      };
    } catch (error: any) {
      throw new Error(`Failed to delete item: ${error.message}`);
    }
  }
}
