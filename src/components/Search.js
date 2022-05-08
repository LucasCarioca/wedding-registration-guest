import React from 'react';
import {Form, Formik} from 'formik';
import {useHistory} from 'react-router';
import {setRegistrationKey} from '../config';
import {Container} from '@mui/material';
import NavBar from './NavBar';

function Search() {
  const history = useHistory();
  return (
    <>
      <NavBar/>
      <Container>
        <div style={{marginTop: '20vh'}}>

          <Formik
            initialValues={{
              registrationKey: ''
            }}
            onSubmit={(values) => {
              setRegistrationKey(values.registrationKey);
              history.push(`/invitations/${values.registrationKey}`);
            }}
          >
            {(formik) => (
              <Form>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <input
                    className="registration-key-search"
                    {...formik.getFieldProps('registrationKey')}
                    placeholder="Registration Key"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
}

export default Search;
