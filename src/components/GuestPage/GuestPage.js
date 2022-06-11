import React, {useEffect, useState} from 'react';
import GuestList from './GuestList';
import {getAllGuests} from '../../services/guest.service';
import NewGuestForm from './NewGuestForm';
import {Container, LinearProgress, Typography} from '@mui/material';
import {getInvitation} from '../../services/invitation.service';
import InvitationNavBar from '../InvitationPage/InvitationNavBar';
import SystemOutageError from '../common/SystemOutageError';

function GuestPage() {
  const [guestList, setGuestList] = useState([]);
  const [reload, setReload] = useState(Date());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [registration, setRegistration] = useState();
  const refresh = () => setReload(Date());

  useEffect(() => {
    getInvitation().then((r) => {
      setRegistration(r);
    }).then(() => getAllGuests()).then((data) => {
      setGuestList(data);
    }).catch((error) => {
      console.error(error);
      setError(error.message);
    }).finally(() => setLoading(false));
  }, [reload]);

  if (error !== '') {
    return (
      <SystemOutageError error={error}/>
    );
  }
  if (loading) {
    return (<LinearProgress/>);
  }
  return (
    <>
      <InvitationNavBar registraion={registration}/>
      <Container>
        <Typography variant={'h2'}>Guests</Typography>
        <br/>
        <Typography>Please register the names of guests that are planning on coming to the wedding. </Typography>
        <Typography>This is not the RSVP but implies that the guests listed are planning on attending.</Typography>
        <br/>
        <Typography><span className={'label--left'}>Invited Guests: </span>{registration.guest_count}</Typography>
        <br/>
        <NewGuestForm onSubmit={refresh}/>
        <GuestList list={guestList} onChange={refresh}/>
      </Container>
    </>
  );
}

export default GuestPage;
