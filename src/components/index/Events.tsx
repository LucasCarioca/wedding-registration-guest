import { Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useDict } from "../../lang"
import SectionDivider from "../SectionDivider"

export default function Events() {
    const { locale } = useRouter()
    const dict = useDict(locale)
    return (
        <section id={'events'}>
            <Typography className={'home-section-title'} variant={'h2'}>{dict.eventsTitle}</Typography>
            <SectionDivider />
            {dict.events.map((event, i) => (<div key={i}>
                <Typography className={'home-section-sub-title'} variant={'h4'}>
                    {event.title}
                </Typography>
                <Typography className={'event-section-main-paragraph'}>
                    {event.date}
                </Typography>
                {event.locationName.length > 0 ? (<>
                    <Typography className={'event-section-main-paragraph'}>
                        {event.time}
                    </Typography>
                    <Typography className={'event-section-main-paragraph'}>
                        {event.locationName}
                    </Typography>
                    <Typography className={'event-section-main-paragraph'}>
                        {event.locationAddress}
                    </Typography>
                </>) : (<>
                    <Typography className={'event-section-main-paragraph'}>
                        {event.locationAddress}
                    </Typography>
                </>)}
                <Typography className={'event-section-main-paragraph'}>
                    {event.attire}
                </Typography>
                {(i < dict.events.length - 1) && <hr />}
            </div>))}
        </section>
    )
}