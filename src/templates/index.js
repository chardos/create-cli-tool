module.exports = (name) => {
  return `
    module.exports = () => {
      console.log('Success! Running ${name}.');
    };
  `
}

