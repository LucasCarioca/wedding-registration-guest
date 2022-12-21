import { Container, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { getInvitation } from "../../src/services/invitation.service"

import Events from "../../src/components/index/Events";
import Home from "../../src/components/index/Home";
import Story from "../../src/components/index/Story";
import Travel from "../../src/components/index/Travel";
import homeStyle from '../../styles/Home.module.css'
import travelStyle from '../../styles/Travel.module.css'
import Head from "next/head";

export async function getServerSideProps(context: any) {
    const { registration_key } = context.query
    const invitation = await getInvitation(registration_key);
    return { props: invitation }
}

type props = { registration_key: string, name: string }

export default function Invitation({ registration_key, name }: props) {
    const { locale } = useRouter()
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Karen & Lucas Wedding - RSVP</title>
        </Head>
        <br />
        <br />
        <section className={'alternate-color'}>
            <Container>
                <br />
                <Typography variant={'h3'}>{name}</Typography>
                <br />
                <Typography>
                    You have been invited to Karen and Lucas&apos;s wedding on September 13th 2023, at Lake Como Italy. This
                    site
                    will be your guide to everything you need to know.
                </Typography>
                <br />
                <Typography>
                    To begin please make sure to visit the <Link href={`/invitations/${registration_key}/guests`} locale={locale}>RSVP
                        Guests</Link> page to register yourself guests that plan to attend from this invitation, including anyone named in the invitation. Guests added here will be considered RSVP. To RSVP your name needs to be added to the guest list for the invitation.
                </Typography>
                <br />
                <Typography>
                    We will update this page with more details on what is pending for each guest.
                </Typography>
                <br />
            </Container>
        </section>
        <Home styles={homeStyle} />
        <Events />
        <Travel styles={travelStyle} />
        <Story />
    </>)
}