import React from 'react';
import {Typography} from '@mui/material';
import NavBar from './NavBar';
import {homeLocalization} from '../common/localization';
import Footer from '../common/Footer';
import OurStoryTimeline from './OurStoryTimeline';
import Gallery from './Gallery';

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
      <section id={'our-story'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.ourStoryTitle.toUpperCase()}</Typography>
        {/* <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.ourStory}
        </Typography> */}
        <OurStoryTimeline/>
      </section>
      <section id={'the-wedding'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.theWeddingTitle.toUpperCase()}</Typography>
        <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.theWedding}
        </Typography>
      </section>
      <section id={'gallery'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.galleryTitle.toUpperCase()}</Typography>
        <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.gallery}
        </Typography>
        <Gallery/>
      </section>
      <section id={'contact'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.contactTitle.toUpperCase()}</Typography>
        <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.contact}
        </Typography>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
