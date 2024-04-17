import { Box } from '@mantine/core';
import { CardProps, Card } from '@/components/Card/Card';
import { newUsersStat } from '@/mockdata';

import classes from './Homepage.module.css';

const defaultCardData: CardProps = {
  statisticData: newUsersStat,
  cardTitle: 'New users',
  comment: 'Last 30 days',
};

export function HomePage() {
  return (
    <Box className={classes.root}>
      <Card {...defaultCardData} />
    </Box>
  );
}
