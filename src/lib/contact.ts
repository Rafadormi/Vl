// Central de contatos da Vidraçaria Liderança
export const CONTACTS = {
  diego: {
    name: 'Diego',
    phone: '(44) 98415-2049',
    whatsapp: 'https://wa.me/5544984152049',
  },
  jonathan: {
    name: 'Jonathan',
    phone: '(44) 98456-4529',
    whatsapp: 'https://wa.me/5544984564529',
  },
  instagram: {
    handle: '@vidracarialideranca',
    url: 'https://instagram.com/vidracarialideranca',
  },
  facebook: {
    name: 'Jonathan Haubricht',
    url: 'https://www.facebook.com/jonathanhaubricht/?locale=pt_BR',
  },
  email: 'vidracarialiderancajd@gmail.com',
  address: 'Rua Toshie Nishiyama Sucupira, 3947 - Parque Alto da Parana, Umuarama - PR, 87.504-715',
  area: 'Umuarama e região',
} as const;

export const waLink = (msg: string, who: 'diego' | 'jonathan' = 'diego') =>
  `${CONTACTS[who].whatsapp}?text=${encodeURIComponent(msg)}`;

export const DEFAULT_WA_MSG =
  'Olá! Vim pelo site da Vidraçaria Liderança e gostaria de um orçamento.';
