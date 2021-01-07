import config from './app/config/index.js';
import server from './app/server/index.js';

const init = async () => {
  try {
    const { app: { port } } = config;
    await server;
    server.listen(
      port,
      console.log(`Server started and listening to port ${port}`), // eslint-disable-line no-console
    );
  } catch (error) {
    console.log(`Error on server initialization: ${error.message}`); // eslint-disable-line no-console
    console.log(error)
  }
};

init();