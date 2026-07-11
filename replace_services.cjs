const fs = require('fs');

let content = fs.readFileSync('src/components/home/ServicesGrid.tsx', 'utf8');

const replacements = {
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop': '/images/servicos/box-banheiro.jpg',
  'https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=800&auto=format&fit=crop': '/images/servicos/vidro-temperado.jpg',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop': '/images/servicos/espelhos.jpg',
  'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=800&auto=format&fit=crop': '/images/servicos/sacadas.jpg',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop': '/images/servicos/guarda-corpo.jpg',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?q=80&w=800&auto=format&fit=crop': '/images/servicos/portas-vidro.jpg',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop': '/images/servicos/janelas.jpg',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop': '/images/servicos/esquadrias.jpg',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop': '/images/servicos/coberturas.jpg',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop': '/images/servicos/divisorias.jpg',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop': '/images/servicos/fachadas.jpg',
  'https://images.unsplash.com/photo-1582035974794-0cd3b6a93540?q=80&w=800&auto=format&fit=crop': '/images/servicos/vitrines.jpg',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop': '/images/servicos/manutencao.jpg'
};

for (const [oldUrl, newUrl] of Object.entries(replacements)) {
  content = content.replace(oldUrl, newUrl);
}

fs.writeFileSync('src/components/home/ServicesGrid.tsx', content, 'utf8');

// Do the same for Servicos.tsx
if (fs.existsSync('src/pages/Servicos.tsx')) {
  let contentServicos = fs.readFileSync('src/pages/Servicos.tsx', 'utf8');
  for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    contentServicos = contentServicos.replace(oldUrl, newUrl);
  }
  fs.writeFileSync('src/pages/Servicos.tsx', contentServicos, 'utf8');
}

console.log('Replaced all image URLs in ServicesGrid.tsx and Servicos.tsx');
