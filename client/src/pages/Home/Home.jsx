import React from 'react';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Heading color="red" size="xl">
        Scan your
        <br />
        <span>code</span> here
      </Heading>
      <div>
        <img
          src="https://mockuphone.com/static/images/devices/apple-iphone12-white-portrait.png"
          className={styles.mobile_img}
        />
      </div>
      <Button
        element="block"
        to="/scan"
        linkClass={styles.next_btn}
        variant="contained"
        color="primary"
        px={7}
      >
        <Heading size="sm">Next</Heading>
      </Button>
    </div>
  );
};

export default Home;
