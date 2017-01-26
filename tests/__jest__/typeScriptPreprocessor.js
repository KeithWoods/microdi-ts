const tsc = require('typescript');
const path = require ('path');
const tsConfig = require(path.resolve('tsconfig.json'));

let testCompilerOptions = Object.assign(
    tsConfig.compilerOptions,
    {
        sourceMap: false,
        inlineSourceMap: true,
        inlineSources: true,
        pretty: true
    }
);

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts') || path.endsWith('.tsx')) {
            return tsc.transpile(
                src,
                testCompilerOptions,
                path,
                []
            );
        }
        return src;
    },
};
