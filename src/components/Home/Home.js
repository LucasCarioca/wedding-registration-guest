import React from 'react';
import {Button, Typography} from '@mui/material';
import NavBar from './NavBar';
import {homeLocalization} from '../common/localization';
import Footer from '../common/Footer';
import OurStoryTimeline from './OurStoryTimeline';
import hotelRoomImg from '../../assets/hotel-home.jpeg';
import theWeddingImg from '../../assets/the-wedding.JPG';

const Home = () => {
  return (
    <>
      <NavBar/>
      <div className={'parallax-home'} id={'home'}>
        <div className={'content-home'}>
          <Typography className={'title-home'} variant={'h1'}>KAREN & LUCAS</Typography>
          <Typography className={'sub-title-home'}>{homeLocalization.subtitle.toUpperCase()}</Typography>
        </div>
      </div>
      <section id={'the-wedding'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.theWeddingTitle}</Typography>
        <SectionDivider/>
        <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.theWedding}
        </Typography>
        <div className="center-content">
          <img src={theWeddingImg} className="home--the-wedding-image"/>
        </div>
      </section>
      <section id={'travel'} className={'alternate-color'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.travelTitle.toUpperCase()}</Typography>
        <div className="home--travel-subsection">
          <Typography className={'home--title-sub-section'} variant={'h4'}>Accommodations</Typography>
          <SectionDivider/>
          <Typography className={'home--main-paragraph-section'}>
            If you wish to stay at Hotel Villa Cipressi, we have a discounted rate for our guests, you may contact the hotel
            directly letting them know you’ll be attending Karen Ardila and Lucas de Souza’s wedding from September
            12-14th 2023.
            {/* Si quieres hospedarte en el Hotel Villa Cipressi puedes contactar al Hotel directamente e informarles que vas asistir a la boda de Karen Ardila y Lucas de Souza del 12-14 de septiembre del 2023 */}
          </Typography>
          <div className="center-content">
            <img src={hotelRoomImg} className="home--hotel-image"/>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.rcollectionhotels.it/hotel-villa-cipressi/index'}>View</Button>
          </div>
        </div>
        <div className="home--travel-subsection">
          <Typography className={'home--title-sub-section'} variant={'h4'}>How to Arrive</Typography>
          <SectionDivider/>
          <Typography className={'home--main-paragraph-section'}>
            Once in the Milan airport, guests will take the Milano Centrale to Varenna- esino train station arriving directly in Varenna.
            {/* Cuando llegues al aeropuerto de Milan, puedes tomar el tren desde la estación Milano Centrale a la estación de Varenna-esino que queda directamente en Varenna.  */}
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.trenitalia.com/en.html'}>View</Button>
          </div>
        </div>
        <div className="home--travel-subsection">
          <Typography className={'home--title-sub-section'} variant={'h4'}>Travel Agent</Typography>
          <SectionDivider/>
          <Typography className={'home--main-paragraph-section'}>
            If you wish to visit other places in Europe, our travel agent Luciane Garcia will be happy to help you with the plane tickets, planning your itinerary, and finding accommodations. Please note bookings can only be made as early as October 2022.
            {/* Quienes deseen visitar otros lugares en Europa, a partir de octubre del 2022, nuestra agente de viajes Luciane Garcia los puede asesorar comprando los pasajes, planeando el itinerario, y hospedaje. */}
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://wa.me/555199872280'}>Contact</Button>
          </div>
        </div>
        <div className="home--travel-subsection">
          <Typography className={'home--title-sub-section'} variant={'h4'}>Lake Como Private Transfers</Typography>
          <SectionDivider/>
          <Typography className={'home--main-paragraph-section'}>
            Safe Airport Transfers to and from Lake Como - Milan Area.
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.transfeero.com/en/'}>View</Button>
          </div>
        </div>
      </section>
      <section id={'our-story'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.ourStoryTitle}</Typography>
        <SectionDivider/>
        {/* <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.ourStory}
        </Typography> */}
        <OurStoryTimeline/>
      </section>
      {/* <section id={'schedule'}>*/}
      {/*  <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.scheduleTitle.toUpperCase()}</Typography>*/}
      {/* </section>*/}
      {/* <section id={'gallery'}>*/}
      {/*  <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.galleryTitle.toUpperCase()}</Typography>*/}
      {/*  <Typography className={'home--main-paragraph-section'}>*/}
      {/*    {homeLocalization.gallery}*/}
      {/*  </Typography>*/}
      {/*  <Gallery/>*/}
      {/* </section>*/}
      {/* <section id={'contact'}>*/}
      {/*  <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.contactTitle.toUpperCase()}</Typography>*/}
      {/*  <Typography className={'home--main-paragraph-section'}>*/}
      {/*    {homeLocalization.contact}*/}
      {/*  </Typography>*/}
      {/* </section>*/}
      <Footer/>
    </>
  );
};

const SectionDivider = () => (<div className={'center-content'}>
  <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.289062" y="15" width="20" height="20" transform="rotate(-45 0.289062 15)" fill="#8D8D8D"/>
  </svg>
</div>);

export default Home;
