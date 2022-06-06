import LocalizedStrings from 'react-localization';

export const timelineLocalization = new LocalizedStrings({
  en: {
    items: [
      {name: 'First thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Second thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Third thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Fourth thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Fifth thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
    ]
  },
  es: {
    items: [
      {name: 'First thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Second thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Third thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Fourth thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Fifth thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
    ]
  },
  br: {
    items: [
      {name: 'First thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Second thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Third thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Fourth thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
      {name: 'Fifth thing happened', text: 'this is some placeholder', date: '1/1/1900', image: ''},
    ]
  },
});

export const homeLocalization = new LocalizedStrings({
  en: {
    subtitle: 'September 13, 2023',
    ourStory: 'This is a summary of our story',
    theWedding: 'These are details on our wedding',
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
    subtitle: 'Septiembre 13, 2023',
    ourStory: 'Este es un resumen de nuestra historia',
    theWedding: 'Estos son los detalles de nuestra boda',
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
    subtitle: 'Setembro 13, 2023',
    ourStory: 'Este é um resumo da nossa história',
    theWedding: 'Esses são detalhes do nosso casamento',
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
