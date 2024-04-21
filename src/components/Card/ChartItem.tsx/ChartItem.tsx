import { Box } from '@mantine/core';
import { Triangle } from './TriangleIcon';

import classes from './ChartItem.module.css';

interface ChartItemProps {
  height: number;
}

export function ChartItem({ height }: ChartItemProps) {
  return (
    <Box className={classes.root}>
      <Box className={classes.progressBar} h={`${height}%`}>
        <Triangle className={classes.triangle} />
      </Box>
    </Box>
  );
}
