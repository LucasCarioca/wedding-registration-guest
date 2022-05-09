import {Alert, Container, Typography} from '@mui/material';
import React from 'react';

const SystemOutageError = ({error}) => {
  console.debug(error);
  return (
    <Container style={{marginTop: '2rem'}}>
      <Typography variant={'h1'}>Error</Typography>
      <Alert severity={'error'}>
        We seem to be experiencing some technical difficulties. Please try again later or contact us.
      </Alert>
      <br/>
      <Typography>
        <span className={'label--left'}>Error details:</span> {error}
      </Typography>
    </Container>
  );
};

export default SystemOutageError;
