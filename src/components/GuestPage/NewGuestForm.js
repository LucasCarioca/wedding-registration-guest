import React, {useState} from 'react';
import {TextField, Button, Grid, Alert} from '@mui/material';
import {Form, Formik} from 'formik';
import {createGuest} from '../../services/guest.service';
import {getAxiosErrorMessage} from '../../utils/errors';

function NewGuestForm({onSubmit}) {
  const [error, setError] = useState();
  const submit = (values) => {
    createGuest(values.firstName, values.lastName, values.email, values.phone, values.emailOptIn, values.smsOptIn)
      .catch((error) => setError(getAxiosErrorMessage(error)))
      .finally(() => onSubmit());
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      onSubmit={submit}
    >
      {(formik) => (
        <Form>
          {error && (<>
            <br/>
            <Alert severity="error">{error}</Alert>
            <br/>
          </>)}
          <Grid container spacing={2}>
            <Grid item md={6} sm={6} xs={12}>
              <TextField
                {...formik.getFieldProps('firstName')}
                label="First Name"
                variant="outlined"
                style={{width: '100%'}}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <TextField
                {...formik.getFieldProps('lastName')}
                label="Last Name"
                variant="outlined"
                style={{width: '100%'}}
              />
            </Grid>
            <Grid item md={9} sm={6}/>
            <Grid item md={3} sm={6} xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                style={{width: '100%'}}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default NewGuestForm;
