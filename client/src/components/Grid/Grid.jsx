import React from 'react';
import Grid from '@mui/material/Grid';

// container { spacing }
// item { xs, sm, md, lg, xl }

const CustomGrid = ({
  children,
  container,
  spacing,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  align,
}) => {
  return (
    <Grid
      container={container ? true : false}
      spacing={spacing}
      item={item ? true : false}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      display={align && 'flex'}
      justifyContent={align}
      alignItems={'center'}
    >
      {children}
    </Grid>
  );
};

export default CustomGrid;
