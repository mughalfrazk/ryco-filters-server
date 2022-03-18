import React, { useContext } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';

import { APP_LOGO } from '../../constants/assets';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import styles from './Staging.module.scss';
import { UserContext } from '../../context/user-context';

const Staging = () => {
  const { data } = useContext(UserContext);

  const printDataHandler = async (print) => {
    try {
      const res = await axios.post(
        'https://api.printnode.com/printjobs',
        {
          printerId: 71180890,
          title: 'My Test PrintJob',
          contentType: 'raw_base64',
          content: print,
          source: 'api documentation!',
          expireAfter: 600,
          options: {
            copies: 1,
            pages: '1',
            duplex: 'long-edge',
            paper: 'A4',
            bin: 'Tray 1',
          },
          authentication: {
            type: 'BasicAuth',
            credentials: {
              user: 'qz6LmEX9hsrqiY6OB9ExmmXCyORhhA-WOJ0PFuazojU',
              pass: '',
            },
          },
        },
        {
          auth: {
            user: 'qz6LmEX9hsrqiY6OB9ExmmXCyORhhA-WOJ0PFuazojU',
            pass: '',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const printDocument = () => {
    const input = document.getElementById('slipToPrint');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      console.log(imgData);
      printDataHandler(imgData);
      // const pdf = new jsPDF();
      // pdf.addImage(imgData, 'JPEG', 0, 0);
      // // pdf.output('dataurlnewwindow');
      // pdf.save('download.pdf');
    });
  };

  return (
    <div className={styles.staging}>
      <Heading color="black" size="xl">
        Lets see what you
        <br />
        have <span>won?</span>
      </Heading>
      <div>
        <button onClick={printDocument}>Hello</button>
        <Button element="block" variant="contained" color="white" px={7}>
          <Heading size="sm">Next</Heading>
        </Button>
      </div>
      <div
        id="slipToPrint"
        style={{
          backgroundColor: '#ffffff',
          width: '400px',
          margin: '0 auto',
          padding: '50px 10px',
        }}
      >
        <img src={APP_LOGO} width="300" />
        <h2 style={{ marginTop: '10px', fontWeight: 'bold' }}>
          CONGRATULATIONS!
        </h2>
        <h1
          style={{ fontSize: '2.2rem' }}
        >{`${data?.Fname} ${data?.Lname}`}</h1>
        <br />
        <h2 style={{ marginTop: '10px' }}>Goodyear Autocare Boronia</h2>
        <h2 style={{ marginTop: '10px' }}>YOU HAVE WON</h2>
        <h1 style={{ fontSize: '2.2rem' }}>GIFT A</h1>
        <h2>Please see</h2>
        <h2>Jim Dais</h2>
        <br />
        <h2 style={{ marginTop: '10px' }}>
          to redeem your gift. Valid for redemption on data shown below only
        </h2>
      </div>
    </div>
  );
};

export default Staging;
