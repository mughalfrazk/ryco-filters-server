import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ({ padding }) => {
  return (
    <div style={{ padding: `${padding}` }}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
