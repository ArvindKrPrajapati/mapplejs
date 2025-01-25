#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const { version } = require("../package.json");

// Show version
program
  .name("mapple")
  .description("A CLI for Mapple.js - A Fastify Framework")
  .version(version, "-v, --version", "Output the current version");

program.parse();
