import React, { useContext } from 'react';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import styles from './WinScreen.module.scss';

const WinScreen = () => {
  return (
    <div className={styles.win_screen} id="hello">
      <div>
        <Heading color="white" size="lg" style={{ marginBottom: '2rem' }}>
          THANK YOU
        </Heading>
        <Heading
          element="secondary"
          color="white"
          size="sm"
          transform="default"
        >
          Please accept out Gift of a<br />
          <br />
          RYCO COFFEE SET
          <br />
          Please see printed voucher below
        </Heading>
      </div>
      <Button
        to="/thank-you"
        element="block"
        variant="contained"
        color="white"
        px={7}
      >
        <Heading size="sm">Next</Heading>
      </Button>
    </div>
  );
};

export default WinScreen;
