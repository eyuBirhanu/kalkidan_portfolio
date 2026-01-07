const fs = require('fs');
const path = require('path');

const ignored = ['node_modules', '.git', 'dist', '.next'];

function walk(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    if (ignored.includes(entry.name)) continue;
    console.log(prefix + (entry.isDirectory() ? '==>' : '>') + entry.name);
    if (entry.isDirectory()) {
      walk(path.join(dir, entry.name), prefix + '  ');
    }
  }
}

walk('.', '');