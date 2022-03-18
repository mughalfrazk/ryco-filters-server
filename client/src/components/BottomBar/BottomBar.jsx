import React from 'react';
import { Link } from 'react-router-dom';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SettingsIcon from '@mui/icons-material/Settings';

import Grid from '../Grid';
import Button from '../Button';
import styles from './BottomBar.module.scss';

const BottomBar = ({ termsModalHandler, privacyModalHandler }) => {
  return (
    <Grid container spacing={2}>
      <Grid item align="flex-start" md={3}>
        <Link to="/">
          <Button element="icon" color="secondary">
            <RestartAltIcon fontSize="large" />
          </Button>
        </Link>
      </Grid>
      <Grid item align="center" md={6}>
        <Button
          color="secondary"
          variant="contained"
          sx={{ marginRight: 1 }}
          onClick={termsModalHandler}
        >
          Terms &amp; Conditions
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={privacyModalHandler}
        >
          Privacy
        </Button>
      </Grid>
      <Grid item md={3}></Grid>
    </Grid>
  );
};

export default BottomBar;
