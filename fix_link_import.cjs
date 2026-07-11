const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'servicos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('import { Link } from \'react-router-dom\';')) {
    content = `import { Link } from 'react-router-dom';\n` + content;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
}
