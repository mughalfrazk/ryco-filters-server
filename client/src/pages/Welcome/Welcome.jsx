import React, { useState, useContext } from 'react';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input/Input';
import { UserContext } from '../../context/user-context';
import styles from './Welcome.module.scss';

const Welcome = () => {
  const { data } = useContext(UserContext);
  const [selectValue, setSelectedValue] = useState('yes');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.welcome}>
      <div>
        <Heading color="white" size="md">
          Is that you
        </Heading>
        <Heading color="white" size="lg" style={{ marginBottom: '2rem' }}>
          {data?.Fname ? data?.Fname : data?.Lname}?
        </Heading>
        <div>
          <Input
            element="radio"
            label="Yes"
            labelPos="end"
            color="white"
            value="yes"
            checked={selectValue === 'yes'}
            onChange={handleChange}
          />
          <Input
            element="radio"
            label="No"
            labelPos="end"
            color="white"
            value="no"
            checked={selectValue === 'no'}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        to={selectValue === 'yes' ? '/staging' : '/scan'}
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

export default Welcome;
