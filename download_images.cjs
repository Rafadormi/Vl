const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirects
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
  { url: 'https://i.postimg.cc/Xvj9Fj0V/vidracaria-lideranca-logo-branca.png', dest: 'public/images/logos/logo-branca.png' },
  { url: 'https://i.postimg.cc/QCmG0PNV/vidracaria-lideranca-logo-horizontal-colorida.png', dest: 'public/images/logos/logo-colorida.png' },
  { url: 'https://i.postimg.cc/FRXMmm77/vl-simbolo-vermelho.png', dest: 'public/images/logos/logo-simbolo.png' },
  
  { url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop', dest: 'public/images/home/hero/hero-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop', dest: 'public/images/home/hero/hero-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop', dest: 'public/images/home/hero/hero-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop', dest: 'public/images/home/hero/hero-4.jpg' }
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
