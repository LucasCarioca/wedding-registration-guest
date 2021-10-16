import React from 'react';
import {Container} from '@mui/material';
import {Form, Formik} from 'formik';
import {useHistory} from 'react-router';
import {setRegistrationKey} from '../config';

function Search() {
  const history = useHistory();
  return (
    <Container style={{
      height: '90vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Formik
        initialValues={{
          registrationKey: ''
        }}
        onSubmit={(values) => {
          setRegistrationKey(values.registrationKey);
          history.push(`/registration`);
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

    </Container>
  );
}

export default Search;
