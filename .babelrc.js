module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
        pragma: "jwReact.createElement"
      },
    ],
  ],
};