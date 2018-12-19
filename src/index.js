const minimist = require('minimist');
const findUp = require('find-up');
const CONFIG_FILE_NAME = '.fsm.js';

module.exports = async () => {
  const args = minimist(process.argv.slice(2));
  const { 
    _: commands,
    ...options
  } = args;
  
  const command = commands[0];

  console.log('command', command);

  return await findUp(CONFIG_FILE_NAME)
    // .then(configPath => ({ configPath, command, positionalArgs, options }))
    // .then(warnMissingDependencies)
    // .then(getConfig)
    // .then(runValidations)
    // .then(decorateData)
    // .then(parseCommand)
    // .catch(logger.error);
};
