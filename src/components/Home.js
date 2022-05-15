import React from 'react';
import {Typography} from '@mui/material';
import NavBar from './NavBar';

const Home = () => {
  return (
    <>
      <div className={'nav-home'}>
        <a href={'#home'}><Typography>HOME</Typography></a>
        <a href={'#our-story'}><Typography>OUR STORY</Typography></a>
        <a href={'#the-wedding'}><Typography>THE WEDDING</Typography></a>
        <a href={'#gallery'}><Typography>GALLERY</Typography></a>
        <a href={'#contact'}><Typography>CONTACT</Typography></a>
        <a href={'#registry'}><Typography>REGISTRY</Typography></a>
      </div>
      <NavBar/>
      <div className={'parallax-home'} id={'home'}>
        <div className={'content-home'}>
          <Typography className={'title-home'} variant={'h1'}>KAREN & LUCAS</Typography>
          <Typography className={'sub-title-home'}>SEPTEMBER 13, 2023</Typography>
        </div>
      </div>
      <section id={'our-story'}>
        <Typography className={'home--title-section'} variant={'h2'}>OUR STORY</Typography>
        <Typography className={'home--main-paragraph-section'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </section>
      <section id={'the-wedding'}>
        <Typography className={'home--title-section'} variant={'h2'}>THE WEDDING</Typography>
        <Typography className={'home--main-paragraph-section'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </section>
      <section id={'gallery'}>
        <Typography className={'home--title-section'} variant={'h2'}>GALLERY</Typography>
        <Typography className={'home--main-paragraph-section'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </section>
      <section id={'contact'}>
        <Typography className={'home--title-section'} variant={'h2'}>CONTACT</Typography>
        <Typography className={'home--main-paragraph-section'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </section>
    </>
  );
};

export default Home;
