module.exports = api => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/react',
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true
        }
      ]
    ],
    plugins: [
      'dynamic-import-node',
      '@babel/plugin-proposal-class-properties',
      [
        'babel-plugin-module-resolver',
        {
          cwd: 'babelrc',
          extensions: ['.ts', '.tsx', '.js'],
          root: ['./']
        }
      ],
      'react-loadable/babel'
    ]
  };
};
