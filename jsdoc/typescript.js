var path = require('path')
const ts = require('typescript')

var babel = require("@babel/core")

exports.handlers = {
  beforeParse: function(e) {
    if (['.ts', '.tsx'].includes(path.extname(e.filename))) {
      // adding const a = 1 ensures that the comments always will be copied,
      // even when there is no javascript inside (just interfaces)
      let result = ts.transpileModule('const _____a = 1; \n' + e.source, {
        compilerOptions: {
          target: 'esnext',
          esModuleInterop: true,
          jsx: 'react',
        }
      });
      e.source = result.outputText
    }
  }
}