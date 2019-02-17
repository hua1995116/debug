const myPlugin = require('../myPlugin/plugin');

module.exports = {
    entry: "./index.js",
    output: {
        filename: "main.js",
    },
    plugins: [
        new myPlugin()
    ]
}