import Head from "next/head";
import styles from "../styles/Faq.module.css";
import {Container, Typography} from "@mui/material";
import SectionDivider from "../src/components/SectionDivider";
import {useRouter} from "next/router";
import {useDict} from "../src/lang";

export default function Faq() {
    const {locale} = useRouter()
    const dict = useDict(locale)
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Karen & Lucas Wedding - FAQ</title>
        </Head>
        <div className={styles['content-home']}>
            <Container>
                <Typography className={styles['title']} variant="h1">Frequently Asked Questions</Typography>
                <SectionDivider/>
                {dict.faq.map((item, i) => (<div key={i}>
                    <FaqItem key={i} question={item.question} answer={item.answer}/>
                    {(i < dict.faq.length - 1) && <hr/>}
                </div>))}
            </Container>
        </div>
    </>)
}

function FaqItem({question, answer}: { question: string, answer: { title: string | undefined, value: string }[] }) {
    return (<>
        <Typography className={'home-section-sub-title'} variant={'h4'}>{question}</Typography>
        {answer.map((item, i) => (<Typography key={i} className={'event-section-main-paragraph'}>
            {item.title && (`${item.title}: `)}{item.value}
        </Typography>))}
    </>)
}