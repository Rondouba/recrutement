module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        include: /node_modules/,
        type: 'javascript/auto',
        resolve: {
          fullSpecified: false,
        },
        fallback: {
          fs: false,
        },
      },
    ],
  },
};
