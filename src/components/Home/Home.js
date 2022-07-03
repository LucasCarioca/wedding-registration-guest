import React from 'react';
import {Button, Typography} from '@mui/material';
import NavBar from './NavBar';
import {homeLocalization} from '../common/localization';
import Footer from '../common/Footer';
import OurStoryTimeline from './OurStoryTimeline';

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
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.theWeddingTitle.toUpperCase()}</Typography>
        <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.theWedding}
        </Typography>
      </section>
      <section id={'travel'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.travelTitle.toUpperCase()}</Typography>
        <Typography className={'home--title-sub-section'} variant={'h4'}>Lake Como Private Transfers</Typography>
        <Typography className={'home--main-paragraph-section'}>
          Luxury and Safe Airport Transfers to and from Lake Como - Milan Area.
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.hotelvillacipressi.it/'}>View</Button>
        </div>
      </section>
      <section id={'our-story'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.ourStoryTitle.toUpperCase()}</Typography>
        {/* <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.ourStory}
        </Typography> */}
        <OurStoryTimeline/>
      </section>
      {/* <section id={'schedule'}>*/}
      {/*  <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.scheduleTitle.toUpperCase()}</Typography>*/}
      {/* </section>*/}
      {/* <section id={'gallery'}>*/ }
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

export default Home;
