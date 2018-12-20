module.exports = (name) => {
  return `
    {
      "name": "${name}",
      "version": "0.0.1",
      "bin": {
        "${name}": "bin/main"
      }
    }
  `
}