const fs = require('fs-extra');
const makeDir = require('make-dir');
const minimist = require('minimist');
const indexTemplate = require('./templates/index');


module.exports = async () => {
  const args = minimist(process.argv.slice(2));
  const { 
    _: positionalArgs,
    ...options
  } = args;
  const [name] = positionalArgs;
  
  const rootPath = `${process.cwd()}/${name}`;
  const indexPath = `${rootPath}/index.js`;
  

  // write to cwd
  console.log('process.cwd()', process.cwd());

  //create the folder
  await makeDir(rootPath);
  
  // Add index
  await fs.writeFile(indexPath, indexTemplate(name), (err) => {
    if (err) {
      throw new Error(err);
    }
  });

  // Add package.json
};
