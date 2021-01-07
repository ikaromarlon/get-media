import dotenv from 'dotenv';

export default (() => {
  dotenv.config();

  const app = {
    host: process.env.APP_HOST || 'http://localhost',
    port: +process.env.APP_PORT || 3001,
    env: process.env.APP_ENV || 'dev',
  };

  return {
    app,
  };
})();