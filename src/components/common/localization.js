import LocalizedStrings from 'react-localization';

export const timelineLocalization = new LocalizedStrings({
  en: {
    items: [
      {name: 'First met', text: 'We first met at a mutual friend\'s Halloween party', date: 'October 2010', image: ''},
      {name: 'Started dating', text: 'We quickly fell in love and became high school sweethearts', date: 'November 2010', image: ''},
      {name: 'Moving out', text: 'We got our first apartment and moved out together with our two dogs, Toto & Chloe', date: 'May 2015', image: ''},
      {name: 'Home sweet home', text: 'We bought our first home and gave our dogs the backyard they deserved', date: 'April 2019', image: ''},
      {name: 'She said yes', text: 'We got engaged while watching the most beautiful sunset on a sailboat in Croatia', date: 'August 2021', image: ''},
    ]
  },
  es: {
    items: [
      {name: 'Se conocieron', text: 'Nos conocimos en una fiesta de Halloween de un amigo en comun', date: 'octubre del 2010', image: ''},
      {name: 'Se hicieron novios', text: 'Un amor de colegio', date: 'noviembre del 2010', image: ''},
      {name: 'Se mudaron juntos', text: 'Arrendamos nuestro primer apartamento y nos mudamos juntos con nuestros perritos Toto y Chloe', date: 'mayo del 2015', image: ''},
      {name: 'Hogar dulce hogar', text: 'Compramos nuestra primera casa y por fin le dimos a nuestros perritos el jardín que se merecen', date: 'abril del 2019', image: ''},
      {name: 'Ella dijo que si', text: 'Nos comprometimos en un velero mientras contemplábamos el atardacere mas hermoso en Croacia', date: 'agosto del 2021', image: ''},
    ]
  },
  br: {
    items: [
      {name: 'First met', text: 'We first met at a mutual friend\'s Halloween party', date: 'October 2010', image: ''},
      {name: 'Started dating', text: 'We quickly fell in love and became high school sweethearts', date: 'November 2010', image: ''},
      {name: 'Moving out', text: 'We got our first apartment and moved out together with our two dogs, Toto & Chloe', date: 'May 2015', image: ''},
      {name: 'Home sweet home', text: 'We bought our first home and gave our dogs the backyard they deserved', date: 'April 2019', image: ''},
      {name: 'She said yes', text: 'We got engaged while watching the most beautiful sunset on a sailboat in Croatia', date: 'August 2021', image: ''},
    ]
  },
});

export const homeLocalization = new LocalizedStrings({
  en: {
    travelTitle: 'Travel',
    scheduleTitle: 'Schedule',
    subtitle: 'September 13, 2023',
    ourStory: 'This is a summary of our story',
    theWedding: 'Join us in celebrating a night of our love and life together. On Lake Como\'s coast, Hotel Villa Cipressi sets the mood for the perfect romantic getaway where we will tie the knot.',
    gallery: 'Here is a gallery of images',
    contact: 'Our contact information',
    homeTitle: 'Home',
    ourStoryTitle: 'Our Story',
    theWeddingTitle: 'The Wedding',
    galleryTitle: 'Gallery',
    contactTitle: 'Contact',
    registryTitle: 'Registry',
    invitationTitle: 'Invitation'
  },
  es: {
    travelTitle: 'Viaje',
    scheduleTitle: 'Cronograma',
    subtitle: 'Septiembre 13, 2023',
    ourStory: 'Este es un resumen de nuestra historia',
    theWedding: 'Celebra con nosotros nuestra unión. En la costa del lago Como, el Hotel Villa Cipressi dispondrá el ambiente para el perfecto escape romántico en el que daremos el sí. ',
    gallery: 'Aqui una galeria de imagenes',
    contact: 'Nuestra información de contacto',
    homeTitle: 'Inicio',
    ourStoryTitle: 'Nuestra historia',
    theWeddingTitle: 'La boda',
    galleryTitle: 'Galería',
    contactTitle: 'Contacto',
    registryTitle: 'lista de regalos',
    invitationTitle: 'invitación'
  },
  br: {
    travelTitle: 'Viagem',
    scheduleTitle: 'Cronograma',
    subtitle: 'Setembro 13, 2023',
    ourStory: 'Este é um resumo da nossa história',
    theWedding: 'Junte-se a nós para celebrar uma noite de nosso amor e vida juntos. Na costa do Lago de Como, o Hotel Villa Cipressi cria o clima para uma escapadela romântica perfeita onde nos casaremos.',
    gallery: 'Aqui está uma galeria de imagens',
    contact: 'Nossas informações de contato',
    homeTitle: 'Inicio',
    ourStoryTitle: 'Nossa história',
    theWeddingTitle: 'O casamento',
    galleryTitle: 'Galeria',
    contactTitle: 'Contato',
    registryTitle: 'Lista de presentes',
    invitationTitle: 'convite'
  }
});

export const allLocalizations = [homeLocalization];

export const setLanguages = (language) => allLocalizations.forEach(localization => localization.setLanguage(language));

export const getLanguage = () => {
  return homeLocalization.getLanguage();
};
