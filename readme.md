# MappleJs

A framework to build api faster than and easier to maintain using Fastify.

## Getting Started (Using MappleJs CLI)

1. Create a new Mapple project:

- npx mapplejs generate app
- ### or
- npx mapplejs g app

2. Create service

- npx mapplejs generate service

3. Start development server:

- npm run dev

## Available Scripts

- `npm run dev` - Starts development server
- `npm start` - Runs production server

## Manually

1. Create src/index.js file

```const fastify = require("fastify");
const { serviceInit } = require("mapplejs");
const app = fastify();

class UserService {
  path = "users";

  constructor(app) {
    this.app = app;
  }

  // GET /users
  async find(req, res) {
    return [];
  }

  // GET /users/:id
  async get(id, req, res) {
    return { id };
  }

  // POST /users
  async create(data, req, res) {
    return { data };
  }

  // PATCH /users/:id
  async patch(id, data, req, res) {
    return { id, data };
  }

  // DELETE /users/:id
  async delete(id, req, res) {
    return { id };
  }
}

app.decorate("service", {});

app.register(function (app) {
  serviceInit(app, new UserService(app));
});

app.listen({ port: 3000 }).then(() => {
  console.log("server is running on http://localhost:3000");
});
```

## Features

- Uses Fastify
- Create routes easily

## License

ISC
