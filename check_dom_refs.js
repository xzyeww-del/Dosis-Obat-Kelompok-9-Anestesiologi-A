const fs = require('fs');
const path = require('path');

function readFiles(dir, exts) {
  return fs.readdirSync(dir)
    .filter(f => exts.includes(path.extname(f)))
    .map(f => ({ name: f, text: fs.readFileSync(path.join(dir, f), 'utf8') }));
}

function extractIdsFromHtml(text) {
  const ids = new Set();
  const idRegex = /id\s*=\s*"([a-zA-Z0-9_\-:\.]+)"/g;
  let m;
  while ((m = idRegex.exec(text)) !== null) ids.add(m[1]);
  return ids;
}

function extractGetElementIds(text) {
  const refs = new Set();
  const re1 = /document\.getElementById\(\s*'([^']+)'\s*\)/g;
  const re2 = /document\.getElementById\(\s*"([^"]+)"\s*\)/g;
  let m;
  while ((m = re1.exec(text)) !== null) refs.add(m[1]);
  while ((m = re2.exec(text)) !== null) refs.add(m[1]);
  return refs;
}

function main() {
  const cwd = path.resolve(__dirname, '..');
  const files = readFiles(cwd, ['.html', '.js']);

  const presentIds = new Set();
  const referencedIds = new Set();

  files.forEach(f => {
    if (f.name.endsWith('.html')) {
      const ids = extractIdsFromHtml(f.text);
      ids.forEach(i => presentIds.add(i));
    }
  });

  files.forEach(f => {
    const refs = extractGetElementIds(f.text);
    refs.forEach(r => referencedIds.add(r));
  });

  const missing = [];
  referencedIds.forEach(r => { if (!presentIds.has(r)) missing.push(r); });

  console.log('Scanned files in', cwd);
  console.log('Found element IDs in HTML:', [...presentIds].length);
  console.log('Found document.getElementById refs:', [...referencedIds].length);
  if (missing.length === 0) {
    console.log('\n✅ No missing element IDs detected.');
  } else {
    console.log('\n❌ Missing element IDs (referenced but not present in any HTML file):');
    missing.forEach(m => console.log(' -', m));
    console.log('\nPlease add the missing elements to your HTML or remove the references.');
    process.exitCode = 2;
  }
}

main();
