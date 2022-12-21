import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useDict } from "../../lang";
import { styledComponent } from "../../utility/styledComponent";
import SectionDivider from "../SectionDivider";

export default function Travel({styles}: styledComponent) {
    const { locale } = useRouter()
    const dict = useDict(locale)

    return (
        <section id={'travel'} className={'alternate-color'}>
            <Typography className={'home-section-title'} variant={'h2'}>{dict.travelTitle}</Typography>
            <div className={styles['subsection']}>
                <Typography className={'home-section-sub-title'} variant={'h4'}>{dict.accommodationsTitle}</Typography>
                <SectionDivider />
                <Typography className={'home-section-main-paragraph'}>
                    {dict.accommodations}
                </Typography>
                <div className="center-content">
                    <img src="/hotel-home.jpg" className={styles['hotel-image']} alt={"Venue Hotel Room"} />
                </div>
                <div className={'center-content'}>
                    <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'mailto:info@hotelvillacipressi.it'}>Email Hotel</Button>
                </div>
            </div>
            <div className={styles['subsection']}>
                <Typography className={'home-section-sub-title'} variant={'h4'}>{dict.howToArriveTitle}</Typography>
                <SectionDivider />
                <Typography className={'home-section-main-paragraph'}>
                    {dict.howToArrive}
                </Typography>
                <div className={'center-content'}>
                    <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.trenitalia.com/en.html'}>View</Button>
                </div>
                <Typography className={'home-section-main-paragraph'}>
                    {dict.transportation}
                </Typography>
                <div className={'center-content'}>
                    <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://www.transfeero.com/en/'}>View</Button>
                </div>
            </div>
            <div className={styles['subsection']}>
                <Typography className={'home-section-sub-title'} variant={'h4'}>{dict.travelAgentTitle}</Typography>
                <SectionDivider />
                <Typography className={'home-section-main-paragraph'}>
                    {dict.travelAgent}
                </Typography>
                <div className={'center-content'}>
                    <Button variant={'outlined'} className={'home--title-button'} target={'_blank'} href={'https://wa.me/555199872280'}>Contact</Button>
                </div>
            </div>
        </section>
    )
}