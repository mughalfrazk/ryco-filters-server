import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input/Input';
import OnScreenKeyboard from '../../components/OnScreenKeyboard';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { UserContext } from '../../context/user-context';
import Loading from '../../components/Loading/Loading';
import styles from './InputScreen.module.scss';

const InputScreen = () => {
  const user = useContext(UserContext);
  let navigate = useNavigate();
  let keyboardRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [barcodeValue, setBarcodeValue] = useState('');
  const [inputLength, setInputLength] = useState(0);
  const [showKeyboard, setShowKeyboard] = useState(true);

  const onSubmit = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/api/${id}`);
      user.setData(res?.data[0]);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/welcome');
      }, 1000);
    } catch (error) {
      console.log('Error: ', error);
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const input = event.target.value;
    setBarcodeValue(input);
    keyboardRef?.current?.setInput(input);
    if (input.length >= 15) {
      onSubmit(input);
    }
  };

  const showKeyboardHandler = () => {
    setShowKeyboard((prevMode) => !prevMode);
  };

  const onChange = (input) => {
    setInputLength(input.length);
    setBarcodeValue(input);
    if (input.length >= 15) {
      onSubmit(input);
    }
  };

  return (
    <div className={styles.scan_barcode}>
      <div>
        <Heading element="secondary" color="white" size="sm">
          Please scan your barcode below
        </Heading>
        <div className={styles.scan_input}>
          <Input
            color="secondary"
            value={barcodeValue}
            onChange={handleChange}
            autoFocus
            fullWidth
            iconPos="end"
            icon={
              <Button element="icon" onClick={showKeyboardHandler}>
                <KeyboardIcon />
              </Button>
            }
          />
        </div>
        {showKeyboard && (
          <OnScreenKeyboard
            keyboardRef={keyboardRef}
            input={barcodeValue}
            onChange={onChange}
            setInput={setBarcodeValue}
            setInputLength={setInputLength}
          />
        )}
      </div>
      <div>
        <Button
          element="block"
          variant="contained"
          color="white"
          px={7}
          onClick={() => onSubmit(barcodeValue)}
        >
          {isLoading ? (
            <Loading padding="2px 15px" />
          ) : (
            <Heading size="sm">Next</Heading>
          )}
        </Button>
      </div>
    </div>
  );
};

export default InputScreen;
