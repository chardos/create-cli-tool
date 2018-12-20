const fs = require('fs-extra');
const makeDir = require('make-dir');
const minimist = require('minimist');
const indexTemplate = require('./templates/index');
const packageTemplate = require('./templates/package');
const mainTemplate = require('./templates/main');

module.exports = async () => {
  const args = minimist(process.argv.slice(2));
  const { 
    _: positionalArgs,
    ...options
  } = args;
  const [name] = positionalArgs;
  
  const rootPath = `${process.cwd()}/${name}`;
  const srcPath = `${rootPath}/src`;
  const binPath = `${rootPath}/bin`;
  const indexPath = `${rootPath}/src/index.js`;
  const packagePath = `${rootPath}/package.json`;
  const mainPath = `${binPath}/main`;
  
  //create the folders
  await makeDir(srcPath);
  await makeDir(binPath);
  
  // Add index
  await fs.writeFile(indexPath, indexTemplate(name), (err) => {
    if (err) { throw new Error(err) };
  });

  // Add package.json
  await fs.writeFile(packagePath, packageTemplate(name), (err) => {
    if (err) { throw new Error(err) };
  });

  // Add package.json
  await fs.writeFile(mainPath, mainTemplate, (err) => {
    if (err) { throw new Error(err) };
  });



};
