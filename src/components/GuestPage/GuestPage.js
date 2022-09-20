import React, {useEffect, useState} from 'react';
import GuestList from './GuestList';
import {getAllGuests} from '../../services/guest.service';
import NewGuestForm from './NewGuestForm';
import {Container, LinearProgress, Typography} from '@mui/material';
import {getInvitation} from '../../services/invitation.service';
import SystemOutageError from '../common/SystemOutageError';
import NavBar from '../Home/NavBar';

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
      <NavBar/>
      <Container style={{paddingTop: '100px'}}>
        <Typography variant={'h2'}>RSVP</Typography>
        <br/>
        <Typography>Please fill out your information below and that of any other guests in this invitation.</Typography>
        <Typography>Guests will only be considered RSVP&lsquo;d if their name appears on this list. If you can no longer attend please remove your name from the list below and that will undo your RSVP.</Typography>
        <Typography>If you have any questions please don&lsquo;t hesitate to reach out to Karen or Lucas.</Typography>
        <br/>
        <Typography><span className={'label--left'}>Number of people invited: </span>{registration.guest_count}</Typography>
        <br/>
        <NewGuestForm onSubmit={refresh}/>
        <GuestList list={guestList} onChange={refresh}/>
      </Container>
    </>
  );
}

export default GuestPage;
