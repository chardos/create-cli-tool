const fs = require('fs-extra');
const makeDir = require('make-dir');
const minimist = require('minimist');
const indexTemplate = require('./templates/index');
const packageTemplate = require('./templates/package');


module.exports = async () => {
  const args = minimist(process.argv.slice(2));
  const { 
    _: positionalArgs,
    ...options
  } = args;
  const [name] = positionalArgs;
  
  const rootPath = `${process.cwd()}/${name}`;
  const srcPath = `${rootPath}/src`;
  const indexPath = `${rootPath}/src/index.js`;
  const packagePath = `${rootPath}/package.json`;
  
  //create the folder
  await makeDir(srcPath);
  
  // Add index
  await fs.writeFile(indexPath, indexTemplate(name), (err) => {
    if (err) { throw new Error(err) };
  });

  // Add package.json
  await fs.writeFile(packagePath, packageTemplate(name), (err) => {
    if (err) { throw new Error(err) };
  });
};
