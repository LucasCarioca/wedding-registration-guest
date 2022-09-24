import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import {useHistory} from 'react-router';
import {getRegistrationKey, setRegistrationKey} from '../../config';
import {Alert, Container, Typography, Button} from '@mui/material';
import NavBar from '../Home/NavBar';
import {searchInvitation} from '../../services/invitation.service';

function Search() {
  const history = useHistory();
  const [error, setError] = useState('');
  const registrationKey = getRegistrationKey();
  if (registrationKey) history.push(`/invitations/${registrationKey}/guests`);
  return (
    <>
      <NavBar/>
      <div id={'home'}>
        <div className={'content-home'}>
          <Container>
            <Typography className="search-title" variant="h1">RSVP</Typography>
            <hr/>
            <Formik
              initialValues={{
                searchString: ''
              }}
              onSubmit={(values) => {
                const searchString = values.searchString.toLowerCase().trim();
                searchInvitation(searchString)
                  .then(registration => {
                    setRegistrationKey(registration.registration_key);
                    history.push(`/invitations/${registration.registration_key}/guests`);
                  })
                  .catch(_ => setError(`Invitation not found using ${values.searchString}`));
              }}
            >
              {(formik) => (
                <Form>
                  {error != '' && (
                    <Alert severity={'error'}>{error}</Alert>
                  )}
                  <br/>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <input
                      className="registration-key-search"
                      {...formik.getFieldProps('searchString')}
                      placeholder="Email, Phone or Key"
                    />
                  </div>
                  <br/>
                  <Button type="submit" variant='contained'>FIND RSVP</Button>
                </Form>
              )}
            </Formik>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Search;
