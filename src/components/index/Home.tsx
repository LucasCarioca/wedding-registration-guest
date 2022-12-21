import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useDict } from "../../lang";
import { daysUntil } from "../../utility/daysUntil";
import { styledComponent } from "../../utility/styledComponent";
import SectionDivider from "../SectionDivider";

export default function Home({ styles }: styledComponent) {
    const { locale } = useRouter()
    const dict = useDict(locale)

    return (<>
        <div id={'home'}>
            <div className={styles['content-home']}>
                <Typography className={styles['title-home']} variant={'h1'}>KAREN</Typography>
                <br />
                <Typography className={styles['title-home']} variant={'h2'}>and</Typography>
                <br />
                <Typography className={styles['title-home']} variant={'h1'}>LUCAS</Typography>
                <img className={styles['home-img']} src="/mobile.jpg" alt={'Karen and Lucas'} />
                <Typography className={styles['sub-title-home']}>{dict.subtitle}</Typography>
                <Typography className={styles['sub-title-home-line-two']}>{dict.subtitle2.toUpperCase()}</Typography>
                <Typography className={styles['sub-title-home-line-three']}>{daysUntil(dict.subtitle3)}!</Typography>
            </div>
        </div>
        <section id={'the-wedding'} className={'alternate-color'}>
            <Typography className={'home-section-title'} variant={'h2'}>{dict.theWeddingTitle}</Typography>
            <SectionDivider />
            <Typography className={'home-section-main-paragraph'}>
                {dict.theWedding}
            </Typography>
        </section>
        <div className="center-content alternate-color image-container">
        <img src="/the-wedding.jpg" className={styles['the-wedding-image']} alt={'Karen and Lucas at Lake Como Italy'}/>
      </div>
    </>)
}