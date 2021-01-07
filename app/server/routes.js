import fs from 'fs';

export default () => {
  const readDir = fs.readdirSync('./app/');

  const regexDir = /^v\d+$/gm;

  return Promise.all(
    readDir
      .filter(path => regexDir.test(path))
      .map(path => import(`../${path}/routes/index.js`))
  );
};