'use strict';

const yParser = require('yargs-parser');
const name = process.argv[2];
const argv = yParser(process.argv.slice(3));

const Service = require('../src');
const server = new Service();

console.log(argv);
server.run(name, argv);