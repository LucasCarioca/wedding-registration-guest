import React, {useEffect, useState} from 'react';
import {Container} from '@mui/material';
import {getRegistrationKey, setRegistrationKey} from '../config';
import {useHistory, useParams} from 'react-router';
import {getAllInvitations} from '../services/invitation.service';
import LinearProgress from '@mui/material/LinearProgress';
import Guests from './Guests';

function Registration() {
  const {key} = useParams();
  if (key) {
    setRegistrationKey(key);
  }
  const [registration, setRegistration] = useState();
  const [error, setError] = useState('');
  const history = useHistory();
  const registrationKey = getRegistrationKey();

  useEffect(() => {
    getAllInvitations().then((r) => {
      setRegistration(r);
    }).catch((e) => setError('Invitation not found'));
  }, []);

  if (registrationKey && registrationKey !== '') {
    if (registration) {
      return (
        <Container>
          <h1>Registration</h1>
          <br/>
          <p><span className="label--left">Invitation name:</span> {registration.name}</p>
          <p><span className="label--left">Registration key:</span> {registration.registration_key}</p>
          <p><span className="label--left">Guest limit:</span> {registration.guest_count}</p>
          <br/>
          <Guests/>
        </Container>
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

export default Registration;
