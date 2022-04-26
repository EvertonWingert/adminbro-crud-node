import express from 'express';
import mongoose from 'mongoose';
import { adminBro, router } from './src/admin.js';

const server = express();

server.use(adminBro.options.rootPath, router);

const run = async () => {
  await mongoose.connect('mongodb://localhost/adminbroapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await server.listen(5500);
};

run();
