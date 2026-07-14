const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const imageMap = {
  // Box
  'https://images.unsplash.com/photo-1620626011761-996317b8d101': '/images/servicos/box-banheiro.jpg',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a': '/images/servicos/box-banheiro.jpg',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae': '/images/servicos/box-banheiro.jpg',
  'https://images.unsplash.com/photo-1584622781564-1d987f7333c1': '/images/servicos/manutencao.jpg',
  
  // Envidracamento
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a': '/images/servicos/sacadas.jpg',
  
  // Guarda corpo
  'https://images.unsplash.com/photo-1502672260266-1c1c6741d40b': '/images/servicos/guarda-corpo.jpg',
  
  // Espelhos
  'https://images.unsplash.com/photo-1618220179428-22790b46a0eb': '/images/servicos/espelhos.jpg',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f': '/images/servicos/espelhos.jpg',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3': '/images/servicos/espelhos.jpg',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0': '/images/servicos/coberturas.jpg',
  
  // Vitrines
  'https://images.unsplash.com/photo-1555529733-0e67056058e1': '/images/servicos/vitrines.jpg',
  
  // Fachadas
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab': '/images/servicos/fachadas.jpg',
  
  // Divisorias
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2': '/images/servicos/divisorias.jpg',
  
  // Portas
  'https://images.unsplash.com/photo-1534063806742-5e359049dd82': '/images/servicos/portas-vidro.jpg',
  
  // Janelas
  'https://images.unsplash.com/photo-1497366216548-37526070297c': '/images/servicos/janelas.jpg',
  
  // Esquadrias
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c': '/images/servicos/esquadrias.jpg',
  
  // Vidro temperado
  'https://images.unsplash.com/photo-1574360699264-5a3d758c5a2c': '/images/servicos/vidro-temperado.jpg',
  
  // Coberturas
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750': '/images/servicos/coberturas.jpg',
  
  // Logos
  'https://i.postimg.cc/Xvj9Fj0V/vidracaria-lideranca-logo-branca.png': '/images/logos/logo-branca.png',
  'https://i.postimg.cc/QCmG0PNV/vidracaria-lideranca-logo-horizontal-colorida.png': '/images/logos/logo-colorida.png',
  'https://i.postimg.cc/FRXMmm77/vl-simbolo-vermelho.png': '/images/logos/logo-simbolo.png'
};

const files = walkSync('src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  Object.keys(imageMap).forEach(key => {
    // Replace unsplash with specific query params too
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^"\']*', 'g');
    content = content.replace(regex, imageMap[key]);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
