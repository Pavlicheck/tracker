const config = {
  presets: ["@babel/env", "@babel/typescript", "@babel/react"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ]
  ]
};

module.exports = config;
