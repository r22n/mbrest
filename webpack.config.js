const { resolve } = require('path');

module.exports = {
    mode:'production',
    entry: './cdn.js',
    output: {
        filename: 'index.min.js',
        path: resolve(__dirname, 'dist'),
    },
};