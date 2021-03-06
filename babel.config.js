const config = {
  presets: ["@babel/env", "@babel/typescript", "@babel/react"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ]
};

module.exports = config;
