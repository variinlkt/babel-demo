module.exports = {
  "presets": [
    [
      "@babel/preset-env", {
        "modules": false,
        "targets": {
          "browsers": ["Android >= 4.4.0", "ios >= 9.0"]
        },
        "useBuiltIns": false,
        "debug": false,
        // "corejs": 3
      }
    ]
  ],
  // "plugins": [
  //   [
  //     "@babel/plugin-transform-runtime",
  //     {
  //       "absoluteRuntime": false,
  //       "corejs": 3,
  //       "helpers": true,
  //       "regenerator": true,
  //       "useESModules": false
  //     }
  //   ]
  // ]
  
}
