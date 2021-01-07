import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes.js';

const factory = async (engine) => {

  const setEngine = (engine) => engine();

  const setMiddlewares = (server, middlewares = []) => middlewares.forEach(middleware => server.use(middleware));

  const setRoutes = (server, routes, prefix = '') => server.use(prefix, routes);

  const setErrorResponseHandler = (server) =>
    server.use((err, req, res, next) => {
      if (res.headersSent) return next(err);
      return res.status(500).json({ message: err.toString() });
    });

  const server = setEngine(engine);

  setMiddlewares(server, [
    engine.json(),
    engine.urlencoded({ extended: true }),
    cors(),
    morgan('dev'),
  ]);

  setRoutes(server, await routes(), '/api/v1');

  setErrorResponseHandler(server);

  return server;
};

export default factory(express);