import {Container, Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../Home/Home';

const InvitationHome = ({registration}) => (
  <Home>
    <section className={'alternate-color'}>
      <Container>

        <br/>
        <Typography variant={'h3'}>{registration.name}</Typography>
        <br/>
        <Typography>
          You have been invited to Karen and Lucas&apos;s wedding on September 13th 2023, at Lake Como Italy. This
          site
          will be your guide to everything you need to know.
        </Typography>
        <br/>
        <Typography>
          To begin please make sure to visit the <Link to={`/invitations/${registration.registration_key}/guests`}>Register
          Guests</Link> page to register the guests the plan to attend from this invitation.
          Guests added here will be considered RSVP.
        </Typography>
        <br/>
        <Typography>
          We will update this page with more details on what is pending for each guest.
        </Typography>
        <br/>
      </Container>
    </section>
  </Home>
);

export default InvitationHome;
