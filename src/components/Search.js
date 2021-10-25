import React from 'react';
import {Form, Formik} from 'formik';
import {useHistory} from 'react-router';
import {setRegistrationKey} from '../config';

function Search() {
  const history = useHistory();
  return (
    <div className="hero">
      <div style={{height: '200px'}}></div>
      <h1 className="hero--title">Lucas & Karen</h1>
      <h2 className="hero--sub-title">8/16/2022</h2>
      <Formik
        initialValues={{
          registrationKey: ''
        }}
        onSubmit={(values) => {
          setRegistrationKey(values.registrationKey);
          history.push(`/registrations/${values.registrationKey}`);
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
      <div className="hero--blur"></div>
    </div>
  );
}

export default Search;
