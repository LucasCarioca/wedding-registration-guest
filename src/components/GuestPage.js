import React, {useEffect, useState} from 'react';
import GuestList from './GuestList';
import {getAllGuests} from '../services/guest.service';
import NewGuestForm from './NewGuestForm';
import {Button, Container, LinearProgress, Typography} from '@mui/material';
import {useHistory} from 'react-router';
import {getInvitation} from '../services/invitation.service';
import InvitationNavBar from './InvitationNavBar';

function GuestPage() {
  const history = useHistory();
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
      <Container style={{marginTop: '2rem'}}>
        <Button color={'primary'} onClick={() => history.goBack()}>Back</Button>
        <Typography variant={'h1'}>Error</Typography>
        <Typography>{error}</Typography>
      </Container>
    );
  }
  if (loading) {
    return (
      <Container style={{marginTop: '2rem'}}>
        <Typography variant={'h1'}>Loading</Typography>
        <LinearProgress/>
      </Container>
    );
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
        <NewGuestForm onSubmit={refresh}/>
        <GuestList list={guestList} onChange={refresh}/>
      </Container>
    </>
  );
}

export default GuestPage;
