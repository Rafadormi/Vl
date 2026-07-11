const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'servicos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('ArrowLeft')) {
    // Add import for ArrowLeft if not exists
    content = content.replace(/import {([^}]+)} from 'lucide-react';/, (match, p1) => {
      return `import { ArrowLeft, ${p1.trim()} } from 'lucide-react';`;
    });
  }
  
  if (!content.includes('Link')) {
    // Add import for Link from react-router-dom
    content = `import { Link } from 'react-router-dom';\n` + content;
  }
  
  if (!content.includes('Voltar para Serviços')) {
    // Insert back button after <main ...> or similar
    // Most likely looks like: <main className="flex-1 bg-white">
    content = content.replace(/(<main[^>]*>)/, `$1\n        <div className="max-w-[1280px] mx-auto px-6 pt-10">\n          <Link to="/#servicos" className="inline-flex items-center gap-2 text-[#E60012] font-semibold hover:underline">\n            <ArrowLeft className="h-4 w-4" /> Voltar para Serviços\n          </Link>\n        </div>`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
