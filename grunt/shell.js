module.exports = {
  lint: {
    command: 'node_modules/.bin/eslint . --ext .json --ext .js',
    stdout: false
  },
  archive: {
    command: 'cp dist/en.json test/valid.json',
    stdout: false
  }
};
