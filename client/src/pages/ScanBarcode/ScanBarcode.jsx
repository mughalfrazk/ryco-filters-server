import React, { useContext, useRef, useState } from 'react';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Input from '../../components/Input';
import Loading from '../../components/Loading';
import OnScreenKeyboard from '../../components/OnScreenKeyboard';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import { BARCODE_IMG } from '../../constants/assets';
import { UserContext } from '../../context/user-context';
import styles from './ScanBarcode.module.scss';

const ScanBarcode = () => {
  const user = useContext(UserContext);
  let navigate = useNavigate();
  let keyboardRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [barcodeValue, setBarcodeValue] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);

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

  return (
    <div className={styles.scan_barcode}>
      <div>
        <Heading element="secondary" color="white" size="sm">
          Please scan your barcode below
        </Heading>
        <div className={styles.scan_input}>
          <Input
            type="text"
            color="secondary"
            value={barcodeValue}
            onChange={handleChange}
            sx={{ opacity: 0 }}
            autoFocus
            fullWidth
          />
        </div>
        <img src={BARCODE_IMG} className={styles.barcode_img} />
      </div>
      <div>
        <Button to="/type" element="icon" className={styles.keyboard_icon}>
          <KeyboardIcon color="white" fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default ScanBarcode;
