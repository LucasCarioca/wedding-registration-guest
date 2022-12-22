import {Avatar, Container, List, ListItem, ListItemText, Typography, ListItemAvatar, Button} from "@mui/material";
import Head from "next/head";
import {getAllGuests, getInvitation} from "../../src/services/invitation.service";
import {Invitation} from "../../src/models/invitation";
import {Guest} from "../../src/models/guest";
import GuestForm from "../../src/components/invitations/GuestForm";
import GuestListEdit from "../../src/components/invitations/GuestListEdit";
import {useState} from "react";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from '@mui/icons-material/Done';
import {Alert} from "@mui/lab";

export async function getServerSideProps(context: any) {
    const {registration_key} = context.query
    const invitation = await getInvitation(registration_key)
    const guests = await getAllGuests(registration_key)
    return {props: {invitation, guests}}
}

type props = {
    invitation: Invitation
    guests: Guest[]
}

export default function GuestsPage({invitation: {registration_key, guest_count}, guests}: props) {
    const [edit, setEdit] = useState(false)
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Karen & Lucas Wedding - Guests</title>
        </Head>
        <Container style={{minHeight: '100vh', paddingTop: '100px'}}>
            <Typography variant={'h2'}>Your Party</Typography>
            {(guest_count === guests.length && !edit) ? (<>
                <br/>
                <Alert severity={'success'} action={
                    <Button color={'success'} onClick={() => setEdit(true)}><EditIcon/> Edit</Button>
                }>
                    Thank you for completing your RSVP!
                </Alert>
                <br/>
                <List>
                    {guests.map(((guest, i) => (
                        <ListItem key={i}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>{guest.first_name} {guest.last_name}</ListItemText>
                        </ListItem>
                    )))}
                </List>
            </>) : (<>
                <br/>
                {(guest_count === guests.length) && (<Alert severity={'warning'} action={
                    <Button color={'warning'} onClick={() => setEdit(false)}><DoneIcon/> Stop Editing</Button>
                }>
                    Editing your party information.
                </Alert>)}
                <br/>
                <Typography>
                    Please fill out your information below and that of any other guests in your party.
                </Typography>
                <Typography sx={{fontWeight: 'bold'}}>
                    Only name in the list below will be included in the final invitation list.
                </Typography>
                <br/>
                <Typography><span className={'label-left'}>Number of people invited: </span>{guest_count}</Typography>
                <GuestForm registration_key={registration_key}/>
                <GuestListEdit registration_key={registration_key} guests={guests} guest_count={guest_count}
                               edit={edit}/>
            </>)}
        </Container>
    </>)
}