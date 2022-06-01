import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import {useHistory} from 'react-router';
import {getRegistrationKey, setRegistrationKey} from '../config';
import {Alert, Container} from '@mui/material';
import NavBar from './NavBar';
import {searchInvitation} from '../services/invitation.service';

function Search() {
  const history = useHistory();
  const [error, setError] = useState('');
  const registrationKey = getRegistrationKey();
  if (registrationKey) history.push(`/invitations/${registrationKey}`);
  return (
    <>
      <NavBar/>
      <div className={'parallax-home'} id={'home'}>
        <div className={'content-home'}>
          <Container>
            <Formik
              initialValues={{
                searchString: ''
              }}
              onSubmit={(values) => {
                searchInvitation(values.searchString)
                  .then(registration => {
                    setRegistrationKey(registration.registration_key);
                    history.push(`/invitations/${registration.registration_key}`);
                  })
                  .catch(_ => setError(`Invitation no found using ${values.searchString}`));
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
