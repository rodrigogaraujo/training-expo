module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: './src',
        },
      ],
      [
        '@babel/plugin-proposal-decorators', 
        { 'legacy': true }
      ],
      ['module:react-native-dotenv', {
        'moduleName': '@env',
        'path': '.env',
        'blacklist': null,
        'whitelist': null,
        'safe': false,
        'allowUndefined': true
      }]
    ]
  };
};
