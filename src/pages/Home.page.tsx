import { Box } from '@mantine/core';
import { CardProps, Card } from '@/components/Card/Card';
import { bars } from '@/mockdata';
import classes from './Homepage.module.css';

const defaultCardData: CardProps = {
  barsData: bars,
  cardTitle: 'New users',
};

export function HomePage() {
  return (
    <Box className={classes.root}>
      <Card {...defaultCardData} />
    </Box>
  );
}
