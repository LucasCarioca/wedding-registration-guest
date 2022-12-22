import {Guest} from "../../models/guest";
import {Alert} from "@mui/lab";
import Link from "next/link";
import {useRouter} from "next/router";

type props = {
    registration_key: string;
    guests: Guest[];
    guest_count: number;
}

export default function RSVPAlert({registration_key, guests, guest_count}: props) {
    const {locale} = useRouter()
    if (guests.length === guest_count) return <></>
    return <Alert severity={'error'}>
        You have not yet completed your RSVP. 
        <Link href={`/invitations/${registration_key}/guests`} locale={locale}>Please visit the guests page to complete
            your registration.</Link>
    </Alert>
}