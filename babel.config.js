module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        path: ".env",
        moduleName: '@env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      }
    ]
  ]
};
