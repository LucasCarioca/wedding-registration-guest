import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import {timelineLocalization} from '../common/localization';
import {Typography} from '@mui/material';

function OurStoryTimeline() {
  return (
    <>
      <Timeline>
        {timelineLocalization.items.map((item, i) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent color="text.secondary">
              <Typography style={{fontSize: '1.25rem', fontWeight: 'bold'}}>
                {item.date}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot/>
              {i < (timelineLocalization.items.length - 1) && (<TimelineConnector/>)}
            </TimelineSeparator>
            <TimelineContent>
              <Typography style={{fontSize: '1.25rem', fontWeight: 'bold'}}>
                {item.name}
              </Typography>
              <Typography style={{maxWidth: '200px'}}>
                {item.text}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}

      </Timeline>
    </>
  );
};

export default OurStoryTimeline;
