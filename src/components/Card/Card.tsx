import { Box, Text } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import { ChartItem } from './ChartItem.tsx/ChartItem';
import { ChartBarsData } from '@/types/types';

import classes from './Card.module.css';

export interface CardProps {
  barsData: ChartBarsData[];
  cardTitle: string;
}

export function Card({ barsData, cardTitle }: CardProps) {
  const chartBars = barsData.map((bar) => <ChartItem key={bar.id} height={bar.diff} />);
  return (
    <Box className={classes.root}>
      <Box className={classes.gradientLayer}></Box>
      <Box className={classes.info}>
        <Box className={classes.firstLine}>
          <Text component="h3" className={classes.title}>
            {cardTitle}
          </Text>
          <Box className={classes.difference}>
            <Box className={classes.number}>-19%</Box>
            <IconArrowDown size="1.8rem" stroke={1.5} color="var(--red-difference)" />
          </Box>
        </Box>
        <Box className={classes.secondLine}>
          <Text className={classes.quantity}>+1,983</Text>
          <Text className={classes.comment}>Since last 30 days</Text>
        </Box>
      </Box>
      <Box className={classes.chart}>{chartBars}</Box>
    </Box>
  );
}
