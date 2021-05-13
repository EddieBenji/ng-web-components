const merge = require('concat');
const path = require('path');

const generatedBuildDir = path.normalize(path.join(__dirname, 'dist', 'web-components'));
const files = [
    path.normalize(path.join(generatedBuildDir, 'main.js')),
    path.normalize(path.join(generatedBuildDir, 'polyfills.js')),
    path.normalize(path.join(generatedBuildDir, 'runtime.js'))
];

const outputDir = path.normalize(path.join(__dirname, '..', 'angular-host'));
const outputDir2 = path.normalize(path.join(__dirname, '..', 'ng9-app-host', 'src', 'assets'));
merge(files, path.normalize(path.join(outputDir, 'web-components.js')));
merge(files, path.normalize(path.join(outputDir2, 'web-components.js')));

console.log(`File generated in: ${outputDir} and ${outputDir2}`);