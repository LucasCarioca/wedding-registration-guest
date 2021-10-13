import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material";
import GuestList from "./GuestList";
import {getAllGuests} from "../services/guest.service";
import NewGuestForm from "./NewGuestForm";

function Guests() {
    const [guestList, setGuestList] = useState([]);
    const [reload, setReload] = useState(Date())
    const refresh = () => setReload(Date())
    useEffect(() => {
        getAllGuests().then(data => {
            setGuestList(data);
        }).catch(error => {
            console.error(error)
        })
    }, [reload]);
    return (<>
        <Typography variant="h2">Guests</Typography>
        <NewGuestForm onSubmit={refresh}/>
        <GuestList list={guestList} onChange={refresh}/>
    </>)
}

export default Guests;