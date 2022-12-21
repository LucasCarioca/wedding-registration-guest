import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useDict } from "../../lang";
import SectionDivider from "../SectionDivider";

export default function Story() {
    const { locale } = useRouter()
    const dict = useDict(locale)

    return (
        <section id={'our-story'}>
            <Typography className={'home-section-title'} variant={'h2'}>{dict.ourStoryTitle}</Typography>
            <SectionDivider />
            <Timeline>
                {dict.story.map((item, i) => (
                    <TimelineItem key={i}>
                        <TimelineOppositeContent color="text.secondary">
                            <Typography style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                                {item.date}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            {i < (dict.story.length - 1) && (<TimelineConnector />)}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                                {item.name}
                            </Typography>
                            <Typography style={{ maxWidth: '200px', margin: '2rem 0' }}>
                                {item.text}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </section>
    )
}