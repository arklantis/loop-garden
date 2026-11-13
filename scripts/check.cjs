const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const files = fs.readdirSync(root).filter(name => /\.(js|cjs)$/.test(name));
for (const file of files) execFileSync(process.execPath, ['--check', path.join(root, file)], {stdio: 'inherit'});
console.log(`Syntax checked ${files.length} JavaScript files.`);
