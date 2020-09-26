module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  setupFiles: ['<rootDir>/.jest/setup.js'],
  testMatch: ['<rootDir>/**/*.(spec).(ts|js)'],
}
