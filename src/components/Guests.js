import React, {useEffect, useState} from 'react';
import GuestList from './GuestList';
import {getAllGuests} from '../services/guest.service';
import NewGuestForm from './NewGuestForm';
import {LinearProgress} from '@mui/material';

function Guests() {
  const [guestList, setGuestList] = useState([]);
  const [reload, setReload] = useState(Date());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const refresh = () => setReload(Date());
  useEffect(() => {
    getAllGuests().then((data) => {
      setGuestList(data);
    }).catch((error) => {
      console.error(error);
      setError(error.message);
    }).finally(() => setLoading(false));
  }, [reload]);
  if (error !== '') {
    return (
      <>
        <h1>Error</h1>
        <p>{error}</p>
      </>
    );
  }
  if (loading) return <LinearProgress/>;
  return (
    <>
      <h2>Guests</h2>
      <NewGuestForm onSubmit={refresh}/>
      <GuestList list={guestList} onChange={refresh}/>
    </>
  );
}

export default Guests;
