import React, {useEffect, useState} from 'react';
import {getRegistrationKey, setRegistrationKey} from '../../config';
import {useHistory, useParams} from 'react-router';
import {getInvitation} from '../../services/invitation.service';
import LinearProgress from '@mui/material/LinearProgress';
import InvitationHome from './InvitationHome';
import InvitationNavBar from './InvitationNavBar';
import {Container} from '@mui/material';

function InvitationPage() {
  const {key} = useParams();
  if (key) {
    setRegistrationKey(key);
  }
  const [registration, setRegistration] = useState();
  const [error, setError] = useState('');
  const history = useHistory();
  const registrationKey = getRegistrationKey();

  useEffect(() => {
    getInvitation().then((r) => {
      setRegistration(r);
    }).catch((e) => setError('Invitation not found'));
  }, []);

  if (registrationKey && registrationKey !== '') {
    if (registration) {
      return (
        <>
          <InvitationNavBar registraion={registration}/>
          <InvitationHome registration={registration}/>
        </>
      );
    } else if (error !== '') {
      return (
        <Container>
          <h1>Error</h1>
          <p>{error}</p>
        </Container>
      );
    }
    return <LinearProgress/>;
  } else {
    history.push(`/search`);
    return (
      <Container>
        <h1>Registration not found</h1>
      </Container>
    );
  }
}

export default InvitationPage;
