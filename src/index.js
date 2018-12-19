const makeDir = require('make-dir');
const minimist = require('minimist');

module.exports = async () => {
  const args = minimist(process.argv.slice(2));
  const { 
    _: positionalArgs,
    ...options
  } = args;
  const [name] = positionalArgs;

  // write to cwd
  console.log('process.cwd()', process.cwd());

  //create the folder
  makeDir(`${process.cwd()}/${name}`);
  
};
