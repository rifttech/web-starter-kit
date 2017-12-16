const path = require('path');

const DIST_DIR = "dist";
const ENTRY = "";
const BUNDLE_NAME = "bundle.js"


module.exports = {
    entry: ENTRY,
    output: {
      filename: BUNDLE_NAME,
      path: path.resolve(__dirname, DIST_DIR)
    }
};
