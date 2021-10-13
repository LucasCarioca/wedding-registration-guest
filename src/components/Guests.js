import React, {useEffect, useState} from 'react';
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
        <h2>Guests</h2>
        <NewGuestForm onSubmit={refresh}/>
        <GuestList list={guestList} onChange={refresh}/>
    </>)
}

export default Guests;