import React from 'react';
import {Button, Typography} from '@mui/material';
import {homeLocalization} from '../common/localization';
import Footer from '../common/Footer';
import OurStoryTimeline from './OurStoryTimeline';
import hotelRoomImg from '../../assets/hotel-home.jpeg';
import theWeddingImg from '../../assets/the-wedding.JPG';
import mobileImg from '../../mobile.jpg';
import {daysUntil} from '../common/count-down';

const Home = ({children}) => {
  return (
    <>
      {children}
      <div id={'home'}>
        <div className={'content-home'}>
          <Typography className={'title-home'} variant={'h1'}>KAREN</Typography>
          <br/>
          <Typography className={'title-home'} variant={'h2'}>and</Typography>
          <br/>
          <Typography className={'title-home'} variant={'h1'}>LUCAS</Typography>
          <img className="home-img" src={mobileImg}/>
          <Typography className={'sub-title-home'}>{homeLocalization.subtitle}</Typography>
          <Typography className={'sub-title-home-line-two'}>{homeLocalization.subtitle2.toUpperCase()}</Typography>
          <Typography className={'sub-title-home-line-three'}>{daysUntil(homeLocalization.subtitle3)}!</Typography>
        </div>
      </div>

      <section id={'the-wedding'} className={'alternate-color'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.theWeddingTitle}</Typography>
        <SectionDivider/>
        <Typography className={'home--main-paragraph-section'}>
          {homeLocalization.theWedding}
        </Typography>
        <div className="center-content">
          <img src={theWeddingImg} className="home--the-wedding-image"/>
        </div>
      </section>

      <section id={'events'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.eventsTitle}</Typography>
        <SectionDivider/>
        {homeLocalization.events.map((event, i) => (<div key={i}>
          <Typography className={'home--title-sub-section'} variant={'h4'}>
            {event.title}
          </Typography>
          <Typography className={'home--main-paragraph-section'}>
            {event.date}
          </Typography>
          <Typography className={'home--main-paragraph-section'}>
            {event.details}
          </Typography>
          {(i < homeLocalization.events.length -1) && <hr/>}
        </div>))}
      </section>

      <section id={'travel'} className={'alternate-color'}>
        <Typography className={'home--title-section'} variant={'h2'}>{homeLocalization.travelTitle}</Typography>
        <div className="home--travel-subsection">
          <Typography className={'home--title-sub-section'} variant={'h4'}>{homeLocalization.accommodationsTitle}</Typography>
          <SectionDivider/>
          <Typography className={'home--main-paragraph-section'}>
            {homeLocalization.accommodations}
          </Typography>
          <div className="center-content">
            <img src={hotelRoomImg} className="home--hotel-image"/>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'mailto:info@hotelvillacipressi.it'}>Email Hotel</Button>
          </div>
        </div>
        <div className="home--travel-subsection">
          <Typography className={'home--title-sub-section'} variant={'h4'}>{homeLocalization.howToArriveTitle}</Typography>
          <SectionDivider/>
          <Typography className={'home--main-paragraph-section'}>
            {homeLocalization.howToArrive}
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.trenitalia.com/en.html'}>View</Button>
          </div>
          <Typography className={'home--main-paragraph-section'}>
            {homeLocalization.transportation}
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.transfeero.com/en/'}>View</Button>
          </div>
        </div>
        <div className="home--travel-subsection">
          <Typography className={'home--title-sub-section'} variant={'h4'}>{homeLocalization.travelAgentTitle}</Typography>
          <SectionDivider/>
          <Typography className={'home--main-paragraph-section'}>
            {homeLocalization.travelAgent}
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://wa.me/555199872280'}>Contact</Button>
          </div>
        </div>
        {/* <div className="home--travel-subsection"> */}
        {/* <Typography className={'home--title-sub-section'} variant={'h4'}>{homeLocalization.transportationTitle}</Typography> */}
        {/* <SectionDivider/> */}
        {/*  <Typography className={'home--main-paragraph-section'}>*/}
        {/*    {homeLocalization.transportation}*/}
        {/*  </Typography>*/}
        {/*  <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>*/}
        {/*    <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.transfeero.com/en/'}>View</Button>*/}
        {/*  </div>*/}
        {/* </div>*/}
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
