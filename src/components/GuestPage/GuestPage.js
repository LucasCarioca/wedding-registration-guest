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
        <Typography variant={'h2'}>RSVP Guests</Typography>
        <br/>
        <Typography>Please register the names of guests that are planning on coming to the wedding. </Typography>
        <Typography>Guests added here will be considered RSVP. If you can no longer attend please remove guests from the list below and that will undo your RSVP.</Typography>
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
