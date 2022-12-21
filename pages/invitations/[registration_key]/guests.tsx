import { Container, Typography } from "@mui/material";
import Head from "next/head";
import GuestForm from "../../../src/components/invitations/GuestForm";
import GuestList from "../../../src/components/invitations/GuestList";
import { getAllGuests, getInvitation } from "../../../src/services/invitation.service";

export async function getServerSideProps(context: any) {
    const { registration_key } = context.query
    const invitation = await getInvitation(registration_key)
    const guests = await getAllGuests(registration_key)
    return { props: { invitation, guests } }
}

type props = {
    invitation: { registration_key: string, guest_count: number }
    guests: { first_name: string, last_name: string }[]
}

export default function Guests({ invitation: { registration_key, guest_count }, guests }: props) {
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Karen & Lucas Wedding - Guests</title>
        </Head>
        <Container style={{ paddingTop: '100px' }}>
            <Typography variant={'h2'}>RSVP</Typography>
            <br />
            <Typography>Please fill out your information below and that of any other guests in this invitation.</Typography>
            <Typography>Guests will only be considered RSVP&lsquo;d if their name appears on this list. If you can no longer attend please remove your name from the list below and that will undo your RSVP.</Typography>
            <Typography>If you have any questions please don&lsquo;t hesitate to reach out to Karen or Lucas.</Typography>
            <br />
            <Typography><span className={'label-left'}>Number of people invited: </span>{guest_count}</Typography>
            <GuestForm registration_key={registration_key} />
            <GuestList registration_key={registration_key} guests={guests} />
        </Container>
    </>)
}