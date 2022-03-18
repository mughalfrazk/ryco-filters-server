import React from 'react';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input/Input';
import styles from './ThankYou.module.scss';

const ThankYou = () => {
  return (
    <div className={styles.thank_you}>
      <div>
        <Heading color="white" size="xl">
          Thank You
        </Heading>
      </div>
      <Button to="/" element="block" variant="contained" color="white" px={7}>
        <Heading size="sm">Finish</Heading>
      </Button>
    </div>
  );
};

export default ThankYou;
