const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const images = [
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/box-banheiro.jpg' },
  { url: 'https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/vidro-temperado.jpg' },
  { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/espelhos.jpg' },
  { url: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/sacadas.jpg' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/guarda-corpo.jpg' },
  { url: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/portas-vidro.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/janelas.jpg' },
  { url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/esquadrias.jpg' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/coberturas.jpg' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/divisorias.jpg' },
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/fachadas.jpg' },
  { url: 'https://images.unsplash.com/photo-1582035974794-0cd3b6a93540?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/vitrines.jpg' },
  { url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop', dest: 'public/images/servicos/manutencao.jpg' }
];

async function run() {
  for (const img of images) {
    try {
      await download(img.url, img.dest);
      console.log('Downloaded', img.dest);
    } catch (e) {
      console.error('Failed to download', img.dest, e);
    }
  }
}

run();
